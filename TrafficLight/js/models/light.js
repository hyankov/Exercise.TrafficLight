var app = app || {};
app.Models = app.Models || {};

(function () {
    'use strict';

    app.Models.Light = Backbone.Model.extend({
        defaults: {
            color: "black",
            lengthInSeconds: 0
        }
    });
})();