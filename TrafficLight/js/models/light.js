var app = app || {};

(function () {
    'use strict';

    app.Light = Backbone.Model.extend({
        defaults: {
            color: "",
            lengthInSeconds: 0
        }
    });
})();