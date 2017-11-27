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
                    states: [
                        { isOn: true, lengthInSeconds: 1 },
                        { isOn: false, lengthInSeconds: 1 }
                    ]
                }),

                // Off
                new app.Models.LightStateMachine()
            ]);
        },

        setInStandardOperational: function () {
            this.reset([
                // Red
                new app.Models.LightStateMachine({
                    light: new app.Models.Light({ color: "red" }),
                    states: [
                        // Red for 8s
                        { isOn: true, lengthInSeconds: 8 },

                        // Red+Yellow for 2s
                        { isOn: true, lengthInSeconds: 2 },

                        // Green for 10s
                        { isOn: false, lengthInSeconds: 10 },

                        // Yellow for 2s
                        { isOn: false, lengthInSeconds: 2 }
                    ]
                }),

                // Yellow
                new app.Models.LightStateMachine({
                    light: new app.Models.Light({ color: "yellow" }),
                    states: [
                        // Red for 8s
                        { isOn: false, lengthInSeconds: 8 },

                        // Red+Yellow for 2s
                        { isOn: true, lengthInSeconds: 2 },

                        // Green for 10s
                        { isOn: false, lengthInSeconds: 10 },

                        // Yellow for 2s
                        { isOn: true, lengthInSeconds: 2 }
                    ]
                }),

                // Green
                new app.Models.LightStateMachine({
                    light: new app.Models.Light({ color: "green" }),
                    states: [
                        // Red for 8s
                        { isOn: false, lengthInSeconds: 8 },

                        // Red+Yellow for 2s
                        { isOn: false, lengthInSeconds: 2 },

                        // Green for 6s + 4s blink
                        { isOn: true, lengthInSeconds: 6 },
                        { isOn: false, lengthInSeconds: 1 },
                        { isOn: true, lengthInSeconds: 1 },
                        { isOn: false, lengthInSeconds: 1 },
                        { isOn: true, lengthInSeconds: 1 },

                        // Yellow for 2s
                        { isOn: false, lengthInSeconds: 2 }
                    ]
                })
            ]);
        }
    });
})();