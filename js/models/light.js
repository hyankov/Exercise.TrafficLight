var app = app || {};
app.Models = app.Models || {};

(function () {
    'use strict';

    app.Models.Light = Backbone.Model.extend({
        defaults: function () {
            return {
                color: "",
                isOn: false
            };
        },

        getCurrentColor: function () {
            return this.get("isOn") && this.get("color") !== "" ? this.get("color") : "black";
        }
    });
})();