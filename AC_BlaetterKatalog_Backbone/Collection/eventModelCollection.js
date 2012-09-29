define(["backbone", "underscore"], function (Backbone, _) {
    //Prepare Model for collection
    //var eventModel = new EventModel();
    //eventModel.initialize();
    //Prime collection
    var EventModelCollection = Backbone.Collection.extend({
        //model: eventModel.getEvent()
    });
    //eventModelCollection = new EventModelCollection();
    return EventModelCollection;
})