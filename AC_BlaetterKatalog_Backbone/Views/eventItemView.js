define(["jquery", "backbone"], function ($, Backbone) {
    var EventItemView = Backbone.View.extend({   
        template: $("[id='templateEventItem']").html(),
        render: function () {
            console.log("event item rendering");
            var templ = _.template(this.template);
            this.$el.html(templ(this.model.toJSON()));
            return this;
        }
    });
    return EventItemView;
});