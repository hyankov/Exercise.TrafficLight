var app = app || {};

(function ($) {
    'use strict';

    app.AppView = Backbone.View.extend({
        initialize: function () {
            this.listenTo(app.lights, 'add', this.addOne);
            this.listenTo(app.lights, 'reset', this.addAll);
        },

        addOne: function (light) {
            var lightView = new app.LightView({ model: light });
            this.$el.append(lightView.render().el);
        },

        addAll: function () {
            this.$el.html("");
            app.lights.each(this.addOne, this);
        }
    });
})(jQuery);