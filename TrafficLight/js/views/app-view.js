var app = app || {};
app.Views = app.Views || {};

(function ($) {
    'use strict';

    // ** Model: app.Collections.Lights

    app.Views.AppView = Backbone.View.extend({
        initialize: function () {
            this.render();

            this.listenTo(this.model, "update", this.render);
            this.listenTo(this.model, "reset", this.render);
        },

        render: function () {
            this.$el.html("");

            var lightsView = new app.Views.LightsView({ model: this.model });
            this.$el.append(lightsView.render().el);

            return this;
        }
    });
})(jQuery);