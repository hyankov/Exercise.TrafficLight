var app = app || {};
app.Models = app.Models || {};

(function () {
    'use strict';

    app.Models.LightStateMachine = Backbone.Model.extend({
        _timer: null,

        defaults: {
            light: new app.Models.Light(),
            interval: 3,
            color: null
        },

        initialize: function () {
            this.set("color", this.get("light").getCurrentColor());

            this._timer = setInterval(
                function () { this.get("light").toggle(); }.bind(this),
                this.get("interval") * 1000
            );

            this.listenTo(this.get("light"), "change", function () { this.set("color", this.get("light").getCurrentColor()); });
        }
    });
})();