var app = app || {};
app.Models = app.Models || {};

(function () {
    'use strict';

    app.Models.LightStateMachine = Backbone.Model.extend({
        _index: 0,
        _timer: null,

        defaults: function () {
            return {
                light: new app.Models.Light(),
                states: []
            };
        },

        initialize: function () {
            // When the light in the state machine changes, update the state machine's color
            this.listenTo(this.get("light"), "change", this.updateColor);

            this.on("change:states", this.flattenStates);

            this.flattenStates();

            this.get("light").set("isOn", this.get("flattenedStates")[this._index++] || false);
            this.updateColor();

            this._timer = setInterval(
                function () {
                    if (this._index >= this.get("flattenedStates").length) {
                        this._index = 0;
                    }

                    this.get("light").set("isOn", this.get("flattenedStates")[this._index++] || false);
                }.bind(this),
                1000
            );
        },

        updateColor: function () {
            this.set("color", this.get("light").getCurrentColor());
        },

        flattenStates: function () {
            this.set("flattenedStates", []);

            _.each(this.get("states"), function (state) {
                _.times(state.lengthInSeconds, function () {
                    this.get("flattenedStates").push(state.isOn);
                }, this);
            }, this);
        }
    });
})();