if (typeof define !== 'function') {var define = require('amdefine')(module); }
define(function (require) {
    'use strict';

    var $        = (typeof require === 'function') ? require('jquery')                                      : window.jQuery,
        _        = (typeof require === 'function') ? require('underscore')                                  : window._,
        Backbone = (typeof require === 'function') ? require('backbone')                                    : window.Backbone,
        HTML     = (typeof require === 'function') ? require('text!templates/modules/grid/gridButton.html') : window.HTML;

    var GridButton = Backbone.View.extend({
        tagName: "div",
        className: "gridbutton",
        template: HTML,
        model: null,
        _isSelected: false,

        initialize: function (dataset) {
            this.model = dataset;
        },

        events: {
            "click a": "onClick",
            mouseover: "onHover",
            mouseout: "onHoverOut"
        },

        onClick: function (evt) {
            evt.preventDefault();
        },

        onHover: function () {
            if (!this._isSelected) {
                this.$el.addClass("hover");
            }
        },

        onHoverOut: function () {
            if (!this._isSelected) {
                this.$el.removeClass("hover");
            }
        },

        destroy: function () {
            this.undelegateEvents();
            this.unbind();
            this.remove();
        },

        render: function () {
            var self = this;
            
            var markup = _.template(self.template);
            self.$el.html(markup(self.model));
    
            return this;
        }
    });
    return GridButton;
});