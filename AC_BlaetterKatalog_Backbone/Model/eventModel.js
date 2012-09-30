define(["backbone"], function (Backbone) {
    debugger;
    var EventModel = Backbone.Model.extend({
        defaults: {
            name: "Mock Event"
        }
    });
    // Return to controller
    return EventModel; 
});