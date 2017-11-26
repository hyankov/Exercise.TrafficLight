var app = app || {};

$(function () {
    'use strict';

    app.model = new app.Collections.Lights(
        //[
        //    // Red
        //    new app.Models.Light({
        //        color: "red"
        //    }),

        //    // Yellow
        //    new app.Models.Light({
        //        color: "yellow"
        //    }),

        //    // Green
        //    new app.Models.Light({
        //        color: "green"
        //    })
        //]
    );

    // Normal operational
    app.view = new app.Views.AppView({
        el: "#container",
        model: app.model
    });
});