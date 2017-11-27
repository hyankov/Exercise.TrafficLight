var app = app || {};

$(function () {
    'use strict';

    app.model = new app.Collections.Lights(
        [
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
        ]
    );

    // Normal operational
    app.view = new app.Views.AppView({
        el: "#container",
        model: app.model
    });
});