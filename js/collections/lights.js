var app = app || {};
app.Collections = app.Collections || {};

(function () {
    'use strict';

    app.Collections.Lights = Backbone.Collection.extend({
        model: app.Models.LightStateMachine,

        initialize: function (models) {
            if (!models) {
                this.setInNotOperationalMode();
            }
        },

        setInNotOperationalMode: function () {
            this.reset([
                // Off
                new app.Models.LightStateMachine(),

                // Blinking Yellow
                new app.Models.LightStateMachine({
                    light: new app.Models.Light({ color: "yellow" }),
                    interval: 0.8
                }),

                // Off
                new app.Models.LightStateMachine()
            ]);
        }
    });
})();