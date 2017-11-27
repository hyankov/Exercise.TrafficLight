var app = app || {};
app.Models = app.Models || {};

(function () {
    'use strict';

    app.Models.Light = Backbone.Model.extend({
        defaults: {
            color: "",
            isOn: false
        },

        toggle: function () {
            this.set("isOn", !this.get("isOn"));
        },

        getCurrentColor: function () {
            return this.get("isOn") && this.get("color") !== "" ? this.get("color") : "black";
        }
    });
})();