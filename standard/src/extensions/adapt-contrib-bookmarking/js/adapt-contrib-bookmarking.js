/*
* adapt-bookmarking
* License - https://github.com/cgkineo/adapt-bookmarking/LICENSE
* Maintainers - Dan Ghost <daniel.ghost@kineo.com>, Oliver Foster <oliver.foster@kineo.com>
*/

define([
    'coreJS/adapt'
], function(Adapt) {

    var Bookmarking = _.extend({

        bookmarkLevel: null,
        currentInviews: [],
        inviewEventListeners: [],
        locationID: null,

        initialize: function () {
            this.listenToOnce(Adapt, "router:location", this.onAdaptInitialize);
        },

        onAdaptInitialize: function() {
            if (!this.checkIsEnabled()) return;
            this.setupEventListeners();
            this.checkRestoreLocation();
        },

        checkIsEnabled: function() {
            var courseBookmarkModel = Adapt.course.get('_bookmarking');
            if (!courseBookmarkModel || !courseBookmarkModel._isEnabled) return false;
            if (!Adapt.offlineStorage) return false;
            return true;
        },

        setupEventListeners: function() {
            this._onScroll = _.bind(this.onScroll, Bookmarking);
            this.listenTo(Adapt, 'menuView:ready', this.setupMenu);
            this.listenTo(Adapt, 'pageView:preRender', this.setupPage);
        },

        checkRestoreLocation: function() {
            this.locationID = Adapt.offlineStorage.get("location");

            if (!this.locationID) return;

            this.listenToOnce(Adapt, "pageView:ready menuView:ready", this.restoreLocation);
        },

        restoreLocation: function() {
            _.defer(_.bind(function() {
                this.stopListening();

                var courseBookmarkModel = Adapt.course.get('_bookmarking');
                courseBookmarkModel._locationID = this.locationID;
                this.showPrompt();
            }, this));
        },

        showPrompt: function() {
            var courseBookmarkModel = Adapt.course.get('_bookmarking');
            if (!courseBookmarkModel._buttons) {
                courseBookmarkModel._buttons = {
                    yes: "Yes",
                    no: "No"
                };
            }
            if (!courseBookmarkModel._buttons.yes) courseBookmarkModel._buttons.yes = "Yes";
            if (!courseBookmarkModel._buttons.no) courseBookmarkModel._buttons.no = "No";


            this.listenToOnce(Adapt, "bookmarking:continue", this.navigateToPrevious);
            this.listenToOnce(Adapt, "bookmarking:cancel", this.navigateCancel);

            var promptObject = {
                title: courseBookmarkModel.title,
                body: courseBookmarkModel.body,
                _prompts:[
                    {
                        promptText: courseBookmarkModel._buttons.yes,
                        _callbackEvent: "bookmarking:continue",
                    },
                    {
                        promptText: courseBookmarkModel._buttons.no,
                        _callbackEvent: "bookmarking:cancel",
                    }
                ],
                _showIcon: true
            }

            Adapt.trigger('notify:prompt', promptObject);
        },

        navigateToPrevious: function() {
            var courseBookmarkModel = Adapt.course.get('_bookmarking');
            
            _.defer(function() {
                Backbone.history.navigate('#/id/' + courseBookmarkModel._locationID, {trigger: true});    
            });
            
            this.stopListening(Adapt, "bookmarking:cancel");
        },

        navigateCancel: function() {
            this.stopListening(Adapt, "bookmarking:continue");
        },

        resetLocationID: function () {
            this.setLocationID('');
        },

        setupMenu: function(menuView) {
            var menuModel = menuView.model;
            if (menuModel.get("_parentId")) return this.setLocationID(menuModel.get("_id"));
            else this.resetLocationID();
        },
        
        setupPage: function (pageView) {
            var hasPageBookmarkObject = pageView.model.has('_bookmarking');
            var bookmarkModel = (hasPageBookmarkObject) ? pageView.model.get('_bookmarking') : Adapt.course.get('_bookmarking');
            this.bookmarkLevel = bookmarkModel._level;

            if (!bookmarkModel._isEnabled) {
                this.resetLocationID();
                return;
            } else if (this.bookmarkLevel === 'page') {
                this.setLocationID(pageView.model.get('_id'));
            } else {
                $(window).on("scroll", this._onScroll);
                this.listenTo(Adapt, this.bookmarkLevel + "View:postRender", this.addInViewListeners);
                this.listenToOnce(Adapt, "remove", this.removeInViewListeners);
            }
        },

        addInViewListeners: function (view) {
            var element = view.$el;
            element.data('locationID', view.model.get('_id'));
            console.log("View check on", view.model.get('_id'));  
            element.on('inview', _.bind(this.onInview, this));
            this.inviewEventListeners.push(element);
        },

        onInview: function (event, visible, visiblePartX, visiblePartY) {
            var id = $(event.currentTarget).data('locationID');

            if (visible) {
                if (_.findWhere(this.currentInviews, { id : id }) ) return;
                this.currentInviews.push({
                    id: id,
                    $target: $(event.currentTarget)
                });
            } else {
                if (!_.findWhere(this.currentInviews, { id : id } )) return;
                this.currentInviews = _.reject(this.currentInviews, function(item) {
                    return item.id == id;
                });
            }

            this.sortCurrentInviewItemsByTopOffset();
            this.setLocationToFirstVisible();
        },

        sortCurrentInviewItemsByTopOffset: function() {
            if (this.currentInviews.length === 0) return;
            
            for (var i = 0, l = this.currentInviews.length; i < l; i++){
                var item = this.currentInviews[i];
                item.top = item.$target.offset()['top'];
            }

            this.currentIndexViews = this.currentInviews.sort(function(item1, item2) {
                return item1.top - item2.top;
            });
        },

        onScroll: function() {
            this.setLocationToFirstVisible();
        },

        setLocationToFirstVisible: function() {
            /*  As inview doesn't take into account the navbar
            *   this code allows only items not entirely hidden by the navbar
            *   to be bookmarked
            */
            if (this.currentInviews.length === 0) return;

            var itemsNotUnderNavBar = _.reject(this.currentInviews, function(item) {
                var itemViewPortTopOffset = (item.$target.offset()['top'] - $(window).scrollTop());
                var itemViewPortBottomOffset = itemViewPortTopOffset + item.$target.height();
                return  itemViewPortBottomOffset < ($('.navigation').height() * 2);
            });
            if (itemsNotUnderNavBar.length === 0) return;

            this.setLocationID(itemsNotUnderNavBar[0].id);
        },

        setLocationID: function (id) {
            if (!Adapt.offlineStorage) return;
            Adapt.offlineStorage.set("location", id);
            console.log("Location set", id);
        },

        removeInViewListeners: function () {
            $(this.inviewEventListeners).off('inview');
            this.currentInviews.length = 0;
            this.inviewEventListeners.length = 0;
            this.stopListening(Adapt, 'remove', this.removeInViewListeners);
            this.stopListening(Adapt, this.bookmarkLevel + 'View:postRender', this.addInViewListeners);
        }

    }, Backbone.Events)

    Bookmarking.initialize();

});
