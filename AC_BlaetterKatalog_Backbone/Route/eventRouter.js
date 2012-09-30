define(["jquery", "backbone", "eventmodel", "eventmodelcollection", "eventcollectionview"], function ($, Backbone, EventModel, EventModelCollection, EventCollectionView) {
    var EventRouter = Backbone.Router.extend({
        initialize: function () {
            $.ajaxSetup({
                accepts: "application/json"
            });   
            Backbone.history.start({ silent: true, pushState: true });
        },
        routes: {
            "ShowEventPage": "getEvent",
            "ShowEventPage/:eventId": "getEvent"
        },
        getEvent: function (eventId) {
            // Sample usage: #getEvent.json/1 
            debugger;
            var eventList = { data: [{ name: "Vegetable of the week" }, { name: "Gardening Question Time in Fribourg" }, { name: "Compost and soil - what options are available?" }] };
            // Render the events page
            var eventCollection = new EventModelCollection(eventList.data);
            var eventCollectionView = new EventCollectionView({collection: eventCollection});
            eventCollectionView.renderEventCollection();

            return event;

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
    //var eventRouter = new EventRouter();
    //Backbone.history.start({silent:true,pushState:true});
    //return eventRouter;
    return EventRouter;
});