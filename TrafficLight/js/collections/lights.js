var app = app || {};
app.Collections = app.Collections || {};

(function () {
    'use strict';

    app.Collections.Lights = Backbone.Collection.extend({
        model: app.Models.Light,

        initialize: function (models) {
            if (!models) {
                this.setInNotOperationalMode();
            }
        },

        setInNotOperationalMode: function () {
            this.reset([
                // Off
                new app.Models.Light(),

                // Blinking Yellow
                new app.Models.Light({
                    color: "yellow"
                }),

                // Off
                new app.Models.Light()
            ]);
        }
    });
})();