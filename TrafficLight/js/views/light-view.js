var app = app || {};

(function ($) {
    'use strict';

    app.LightView = Backbone.View.extend({
        template: _.template($("#light-template").html()),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }
    });
})(jQuery);