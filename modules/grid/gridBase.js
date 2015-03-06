if (typeof define !== 'function') {var define = require('amdefine')(module); }
define(function (require) {
    'use strict';

    var $          = (typeof require === 'function') ? require('jquery')                                    : window.jQuery,
        _          = (typeof require === 'function') ? require('underscore')                                : window._,
        Backbone   = (typeof require === 'function') ? require('backbone')                                  : window.Backbone,
        GridPage   = (typeof require === 'function') ? require('framework/modules/grid/gridPage')           : window.GridPage,
        GridButton = (typeof require === 'function') ? require('framework/modules/grid/gridButton')         : window.GridButton,
        HTML       = (typeof require === 'function') ? require('text!templates/modules/grid/gridBase.html') : window.HTML;

    var GridBase = Backbone.View.extend({
        tagName: "div",
        className: "gridwrapper",
        template: HTML,
        model: null,
        tempmodel: [],
        gridButtons: [],
        totalPages: 0,
        gridElements: null,

        initialize: function (options) {
            this.model = options.data || {};
            this.gridElements = options.elements || 9;
            this.createButtons(this.model);
        },

        createButtons: function (model) {
            var self = this;
            if (model) {
                var i = 0;
                _.each(model, function (data) {
                    self.tempmodel[i] = new GridButton(data);
                    self.gridButtons.push(self.tempmodel[i]);
                    i++;
                });
            }
        },

        getTotalPages: function () {
            return this.totalPages;
        },
        
        destroy: function () {
            this.undelegateEvents();
            this.unbind();
            this.remove();
        },

        render: function () {
            var self = this;
            var tmp = [];
            var i = 0, j;
            
            var markup = _.template(self.template);
            self.$el.html(markup(self.model));
           
            while (i < self.gridButtons.length) {
                tmp.push(self.gridButtons[i]);

                if (i !== 0 && (i + 1) % self.gridElements === 0) {
                    j = new GridPage(tmp);
                    self.$el.find(".gridcontainer").append(j.render().el);
                    tmp = [];
                    self.totalPages++;
                }
                i++;
            }
            if (self.gridButtons.length % self.gridElements !== 0) {
                j = new GridPage(tmp);
                self.$el.find(".gridcontainer").append(j.render().el);
                self.totalPages++;
            }
            return this;
        }
    });
    return GridBase;
});