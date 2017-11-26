var app = app || {};

(function () {
    'use strict';

    var Lights = Backbone.Collection.extend({
        model: app.Light
    });

    app.lights = new Lights();
})();