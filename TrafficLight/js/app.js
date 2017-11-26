var app = app || {};

$(function () {
    'use strict';

    // Start rendering
    new app.AppView({
        el: "#trafficLight1"
    });

    // Build the Traffic Light out of the following lights
    app.lights.add([
        // Green
        new app.Light({
            color: "green"
        }),

        // Yellow
        new app.Light({
            color: "yellow"
        }),

        // Red
        new app.Light({
            color: "red"
        })
    ]);
});