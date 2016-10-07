define(function(require) {

    var ComponentView = require('coreViews/componentView');
    var Adapt = require('coreJS/adapt');

    var Accordion = ComponentView.extend({

        events: {
            'click .accordion-item-title': 'toggleItem'
        },

        toggleSpeed: 200,

        preRender: function() {
            // Checks to see if the accordion should be reset on revisit
            this.checkIfResetOnRevisit();
        },

        postRender: function() {
            this.setReadyStatus();
        },

        // Used to check if the accordion should reset on revisit
        checkIfResetOnRevisit: function() {
            var isResetOnRevisit = this.model.get('_isResetOnRevisit');

            // If reset is enabled set defaults
            if (isResetOnRevisit) {
                this.model.reset(isResetOnRevisit);

                _.each(this.model.get('_items'), function(item) {
                    item._isVisited = false;
                });
            }
        },

        toggleItem: function(event) {
            event.preventDefault();

            var $toggleButton = $(event.currentTarget);
            var $accordionItem = $toggleButton.parent('.accordion-item');
            var isCurrentlyExpanded = $toggleButton.hasClass('selected');

            if (this.model.get('_shouldCollapseItems') === false) {
                // Close and reset the selected Accordion item only
                this.closeItem($accordionItem);
            } else {
                // Close and reset all Accordion items
                var allAccordionItems = this.$('.accordion-item');
                var count = allAccordionItems.length;
                for (var i = 0; i < count; i++) {
                    this.closeItem($(allAccordionItems[i]));
                }
            }

            if (!isCurrentlyExpanded) {
                this.openItem($accordionItem);
            }
        },

        closeItem: function($itemEl) {
            if (!$itemEl) {
                return false;
            }

            var $body = $('.accordion-item-body', $itemEl).first();
            var $button = $('button', $itemEl).first();
            var $icon = $('.accordion-item-title-icon', $itemEl).first();

            $body.stop(true, true).slideUp(this.toggleSpeed);
            $button.removeClass('selected');
            $button.attr('aria-expanded', false);
            $icon.addClass('icon-plus');
            $icon.removeClass('icon-minus');
        },

        openItem: function($itemEl) {
            if (!$itemEl) {
                return false;
            }

            var $body = $('.accordion-item-body', $itemEl).first();
            var $button = $('button', $itemEl).first();
            var $icon = $('.accordion-item-title-icon', $itemEl).first();

            $body = $body.stop(true, true).slideDown(this.toggleSpeed, function() {
                $body.a11y_focus();
            });

            $button.addClass('selected');
            $button.attr('aria-expanded', true);

            this.setVisited($itemEl.index());
            $button.addClass('visited');

            $icon.removeClass('icon-plus');
            $icon.addClass('icon-minus');
        },

        setVisited: function(index) {
            var item = this.model.get('_items')[index];
            item._isVisited = true;
            this.checkCompletionStatus();
        },

        getVisitedItems: function() {
            return _.filter(this.model.get('_items'), function(item) {
                return item._isVisited;
            });
        },

        checkCompletionStatus: function() {
            if (this.getVisitedItems().length == this.model.get('_items').length) {
                this.setCompletionStatus();
            }
        }

    });

    Adapt.register('accordion', Accordion);

    return Accordion;

});
