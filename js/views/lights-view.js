var app = app || {};
app.Views = app.Views || {};

(function ($) {
    'use strict';

    // ** Model: app.Collections.Lights

    app.Views.LightsView = Backbone.View.extend({
        template: _.template($("#lights-template").html()),

        render: function () {
            this.$el.html(this.template({ lights: this.model.toJSON() }));

            return this;
        }
    });
})(jQuery);