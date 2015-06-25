/*
 * adapt-contrib-textInput
 * License - https://github.com/adaptlearning/adapt-contrib-textInput/blob/master/LICENSE
 * Maintainers - Kev Adsett <kev.adsett@gmail.com>, Daryl Hedley <darylhedley@hotmail.com>, Himanshu Rajotia <himanshu.rajotia@credipoint.com>
 */

define(function(require) {
    var QuestionView = require('coreViews/questionView');
    var Adapt = require('coreJS/adapt');

    var TextInput = QuestionView.extend({
        events: {
            "blur input":"forceFixedPositionFakeScroll",
            "focus input":"clearValidationError"
        },

        // Used by the question to reset the question when revisiting the component
        resetQuestionOnRevisit: function() {
            this.setAllItemsEnabled(false);
            this.resetQuestion();
        },

        // Used by question to setup itself just before rendering
        setupQuestion: function() {
            // Check if items need to be randomised
            if (this.model.get('_isRandom') && this.model.get('_isEnabled')) {
                this.model.set("_items", _.shuffle(this.model.get("_items")));
            }
        },

        // Used by question to disable the question during submit and complete stages
        disableQuestion: function() {
            this.setAllItemsEnabled(false);
        },

        // Used by question to enable the question during interactions
        enableQuestion: function() {
            this.setAllItemsEnabled(true);
        },

        setAllItemsEnabled: function(isEnabled) {
            _.each(this.model.get('_items'), function(item, index) {
                var $itemInput = this.$('input').eq(index);

                if (isEnabled) {
                    $itemInput.prop('disabled', false);
                } else {
                    $itemInput.prop('disabled', true);
                }
            }, this);
        },

        // Used by question to setup itself just after rendering
        onQuestionRendered: function() {
            this.setReadyStatus();
        },

        forceFixedPositionFakeScroll: function() {
            if (Modernizr.touch) {
                _.defer(function() {
                    window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
                });
            }
        },

        clearValidationError: function() {
            this.$(".textinput-item-textbox").removeClass("textinput-validation-error");
        },

        // Use to check if the user is allowed to submit the question
        canSubmit: function() {
            var canSubmit = true;
            this.$(".textinput-item-textbox").each(function() {
                if ($(this).val() == "") {
                    canSubmit = false;
                }
            });
            return canSubmit;
        },

        // Blank method for question to fill out when the question cannot be submitted
        onCannotSubmit: function() {
            this.showValidationError();
        },

        showValidationError: function() {
            this.$(".textinput-item-textbox").addClass("textinput-validation-error");
        },

        //This preserve the state of the users answers for returning or showing the users answer
        storeUserAnswer: function() {
            _.each(this.model.get('_items'), function(item, index) {
                item.userAnswer = this.$('.textinput-item-textbox').eq(index).val();
            }, this);
        },

        // Return a boolean based upon whether question is correct or not
        isCorrect: function() {
            if(this.model.get('_answers')) this.markGenericAnswers();
            this.markSpecificAnswers();
            // do we have any _isCorrect == false?
            return !_.contains(_.pluck(this.model.get("_items"),"_isCorrect"), false);
        },

        // Allows the learner to give answers into any input, ignoring the order.
        // (this excludes any inputs which have their own specific answers).
        markGenericAnswers: function() {
            var numberOfCorrectAnswers = 0;
            var correctAnswers = this.model.get('_answers').slice();
            _.each(this.model.get('_items'), function(item, itemIndex) {
                _.each(correctAnswers, function(answerGroup, answerIndex) {
                    if(this.checkAnswerIsCorrect(answerGroup, item.userAnswer)) {
                        item._isCorrect = true;
                        correctAnswers.splice(answerIndex,1);
                        numberOfCorrectAnswers++;
                        this.model.set('_numberOfCorrectAnswers', numberOfCorrectAnswers);
                        this.model.set('_isAtLeastOneCorrectSelection', true);
                    }
                }, this);
                if(!item._isCorrect) item._isCorrect = false;
            }, this);
        },

        // Marks any items which have answers specific to it
        // (i.e. item has a _answers array)
        markSpecificAnswers: function() {
            var numberOfCorrectAnswers = 0;
            var numberOfSpecificAnswers = 0;
            _.each(this.model.get('_items'), function(item, index) {
                if(!item._answers) return;
                var userAnswer = this.$(".textinput-item-textbox").eq(index).val();
                if (this.checkAnswerIsCorrect(item["_answers"], userAnswer)) {
                    numberOfCorrectAnswers++;
                    item._isCorrect = true;
                    this.model.set('_numberOfCorrectAnswers', numberOfCorrectAnswers);
                    this.model.set('_isAtLeastOneCorrectSelection', true);
                } else {
                    item._isCorrect = false;
                }
                numberOfSpecificAnswers++;
            }, this);
        },

        checkAnswerIsCorrect: function(possibleAnswers, userAnswer) {
            var answerIsCorrect = _.contains(possibleAnswers, this.cleanupUserAnswer(userAnswer));
            if (answerIsCorrect) this.model.set('_hasAtLeastOneCorrectSelection', true);
            return answerIsCorrect;
        },

        cleanupUserAnswer: function(userAnswer) {
            if (this.model.get('_allowsAnyCase')) {
                userAnswer = userAnswer.toLowerCase();
            }
            if (this.model.get('_allowsPunctuation')) {
                userAnswer = userAnswer.replace(/[\.,-\/#!$£%\^&\*;:{}=\-_`~()]/g, "");
            }
            // removes whitespace from beginning/end (leave any in the middle)
            return $.trim(userAnswer);
        },

        // Used to set the score based upon the _questionWeight
        setScore: function() {
            var numberOfCorrectAnswers = this.model.get('_numberOfCorrectAnswers');
            var questionWeight = this.model.get("_questionWeight");
            var itemLength = this.model.get('_items').length;

            var score = questionWeight * numberOfCorrectAnswers / itemLength;

            this.model.set('_score', score);
        },

        // This is important and should give the user feedback on how they answered the question
        // Normally done through ticks and crosses by adding classes
        showMarking: function() {
            _.each(this.model.get('_items'), function(item, i) {
                var $item = this.$('.textinput-item').eq(i);
                $item.addClass(item._isCorrect ? 'correct' : 'incorrect');
            }, this);
        },

        // Used by the question to determine if the question is incorrect or partly correct
        isPartlyCorrect: function() {
            return this.model.get('_isAtLeastOneCorrectSelection');
        },

        // Used by the question view to reset the stored user answer
        resetUserAnswer: function() {
            _.each(this.model.get('_items'), function(item) {
                item["_isCorrect"] = false;
                item["userAnswer"] = "";
            }, this);
        },

        // Used by the question view to reset the look and feel of the component.
        // This could also include resetting item data
        resetQuestion: function() {
            this.$('.textinput-item-textbox').prop('disabled', !this.model.get('_isEnabled')).val('');

            this.model.set({
                _isAtLeastOneCorrectSelection: false
            });
        },

        // Used by the question to display the correct answer to the user
        showCorrectAnswer: function() {
            _.each(this.model.get('_items'), function(item, index) {
                this.$(".textinput-item-textbox").eq(index).val(item._answers[0]);
            }, this);
        },

        // Used by the question to display the users answer and
        // hide the correct answer
        // Should use the values stored in storeUserAnswer
        hideCorrectAnswer: function() {
            _.each(this.model.get('_items'), function(item, index) {
                this.$(".textinput-item-textbox").eq(index).val(item.userAnswer);
            }, this);
        }
    });

    Adapt.register("textinput", TextInput);

    return TextInput;
});