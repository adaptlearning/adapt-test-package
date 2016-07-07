define([
    'coreJS/adapt'
], function(Adapt) {

    var Bookmarking = _.extend({

        bookmarkLevel: null,
        watchViewIds: null,
        watchViews: [],
        restoredLocationID: null,
        currentLocationID: null,

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
            this._onScroll = _.debounce(_.bind(this.checkLocation, Bookmarking), 1000);
            this.listenTo(Adapt, 'menuView:ready', this.setupMenu);
            this.listenTo(Adapt, 'pageView:preRender', this.setupPage);
        },

        checkRestoreLocation: function() {
            this.restoredLocationID = Adapt.offlineStorage.get("location");

            if (!this.restoredLocationID || this.restoredLocationID === "undefined") return;

            this.listenToOnce(Adapt, "pageView:ready menuView:ready", this.restoreLocation);
        },

        restoreLocation: function() {
            _.defer(_.bind(function() {
                this.stopListening(Adapt, "pageView:ready menuView:ready", this.restoreLocation);

                if (this.restoredLocationID == Adapt.location._currentId) return;

                try {
                    var model = Adapt.findById(this.restoredLocationID);
                } catch (error) {
                    return;
                }

                var locationOnscreen = $("." + this.restoredLocationID).onscreen();
                var isLocationOnscreen = locationOnscreen && (locationOnscreen.percentInview > 0);
                var isLocationFullyInview = locationOnscreen && (locationOnscreen.percentInview === 100);
                if (isLocationOnscreen && isLocationFullyInview) return;

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

            if (Adapt.config.get("_accessibility") && Adapt.config.get("_accessibility")._isActive) {
                $(".loading").show();
                $("#a11y-focuser").focus();
                $("body").attr("aria-hidden", true);
                _.delay(function() {
                    $(".loading").hide();
                    $("body").removeAttr("aria-hidden");
                    Adapt.trigger('notify:prompt', promptObject);
                }, 3000);
            } else {
                Adapt.trigger('notify:prompt', promptObject);
            }
        },

        navigateToPrevious: function() {
            _.defer(_.bind(function() {
                var isSinglePage = Adapt.contentObjects.models.length == 1; 
                Backbone.history.navigate('#/id/' + this.restoredLocationID, {trigger: true, replace: isSinglePage});
            }, this));
            
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
            //set location as menu id unless menu is course, then reset location
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
            } else {
                //set location as page id
                this.setLocationID(pageView.model.get('_id'));

                this.watchViewIds = pageView.model.findDescendants(this.bookmarkLevel+"s").pluck("_id");
                this.listenTo(Adapt, this.bookmarkLevel + "View:postRender", this.captureViews);
                this.listenToOnce(Adapt, "remove", this.releaseViews);
                $(window).on("scroll", this._onScroll);
            }
        },

        captureViews: function (view) {
            this.watchViews.push(view);
        },

        setLocationID: function (id) {
            if (!Adapt.offlineStorage) return;
            if (this.currentLocationID == id) return;
            Adapt.offlineStorage.set("location", id);
            this.currentLocationID = id;
        },

        releaseViews: function () {
            this.watchViews.length = 0;
            this.watchViewIds.length = 0;
            this.stopListening(Adapt, 'remove', this.releaseViews);
            this.stopListening(Adapt, this.bookmarkLevel + 'View:postRender', this.captureViews);
            $(window).off("scroll", this._onScroll);
        },

        checkLocation: function() {
            var highestOnscreen = 0;
            var highestOnscreenLocation = "";

            var locationObjects = [];
            for (var i = 0, l = this.watchViews.length; i < l; i++) {
                var view = this.watchViews[i];

                var isViewAPageChild = (_.indexOf(this.watchViewIds, view.model.get("_id")) > -1 );

                if ( !isViewAPageChild ) continue;

                var element = $("." + view.model.get("_id"));
                var isVisible = (element.is(":visible"));

                if (!isVisible) continue;

                var measurements = element.onscreen();
                if (measurements.percentInview > highestOnscreen) {
                    highestOnscreen = measurements.percentInview;
                    highestOnscreenLocation = view.model.get("_id");
                }
            }

            //set location as most inview component
            if (highestOnscreenLocation) this.setLocationID(highestOnscreenLocation);
        }

    }, Backbone.Events)

    Bookmarking.initialize();

});
