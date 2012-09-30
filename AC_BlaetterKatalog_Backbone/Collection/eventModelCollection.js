define(["backbone", "eventmodel"], function (Backbone, EventModel) {
    debugger;
    var EventModelCollection = Backbone.Collection.extend({
        model: EventModel
    });
    return EventModelCollection;
});