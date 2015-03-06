if (typeof define !== 'function') {var define = require('amdefine')(module); }
define(function (require) {
    'use strict';

    var $        = (typeof require === 'function') ? require('jquery')                                    : window.jQuery,
        _        = (typeof require === 'function') ? require('underscore')                                : window._,
        Backbone = (typeof require === 'function') ? require('backbone')                                  : window.Backbone,
        HTML     = (typeof require === 'function') ? require('text!templates/modules/grid/gridPage.html') : window.HTML;

    var GridPage = Backbone.View.extend({
        tagName: "div",
        className: "gridpage",
        template: HTML,
        model: [],

        initialize: function (dataset) {
            this.model = dataset;
        },

        destroy: function () {
            this.undelegateEvents();
            this.unbind();
            this.remove();
        },

        render: function () {
            var self = this, i;

            var markup = _.template(self.template);
            self.$el.html(markup());

            for (i = 0; i < self.model.length; i++) {
                self.$el.find(".gridpagecontainer").append(self.model[i].render().el);
            }
           
            return this;
        }
    });
    return GridPage;
});