//define(["jquery", "backbone", "eventmodel", "eventcollection", "eventcollectionview"], function ($, Backbone, EventModel, EventCollection, EventCollectionView) {
define(["jquery", "backbone"], function ($, Backbone) {
    var EventRouter = Backbone.Router.extend({
        routes: {
            "getEvent.json": "getEvent",
            "getEvent.json/:eventId": "getEvent"
        },
        getEvent: function (eventId) {
            // Sample usage: #getEvent.json/1 
            var event = { "data": [{ "name": "Vegetable of the week"}, {"name": "Gardening Question Time in Fribourg"}, {"name": "Compost and soil - what options are available?" }]};
            //for (var i = 0; i < event.data.length; i++) {
            //    EventModel.Event.push(event.data[i]);
            //}
            // Render the events page
            //var eventCollection = new EventCollection({
            //                                            model: event
            //                                        });
            //var eventCollectionView = new EventCollectionView({
            //                                                    collection: eventCollection 
            //                                                });
            //eventCollectionView.renderEventCollection();

            //return event;

            //var getEventUrl;
            //if (eventId) {
            //    getEventUrl = "https://localhost:67480/AC_POC/Event.svc/" + eventId;
            //}
            //else {
            //    getEventUrl = "https://localhost:67480/AC_POC/Event.svc"
            //}
            //$.ajax({
            //    url: getEventUrl,
            //    type: "GET",
            //    dataType: "json",
            //    async: false, // Chrome has a problem with async
            //    success: function (wsEvent) {
            //        //debugger;
            //        //EventModel.removeAll();
            //        //for (var i = 0; i < wsEvent.data.length; i++) {
            //        //    EventModel.event.push(wsEvent.data[i]);
            //        //}
            //        console.log("WCF Event(s) fetched for 'AC_POC'");
            //        return wsEvent.data;
            //    },
            //    error: function (data) {
            //        //debugger;  
            //        console.log("Failed to fetch WCF Event(s) from router for 'AC_POC'")
            //        return {}
            //    }
            //});
            return event;
        }
    });
    //var initialize = function () {
    //    var eventRouter = new EventRouter();
    //    Backbone.history.start();
    //}
    
    //return {
    //    initialize: initialize
    //}
    var eventRouter = new EventRouter();
    Backbone.history.start({silent:true,pushState:true});
    return eventRouter;
});