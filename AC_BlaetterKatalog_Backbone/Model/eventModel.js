define(["backbone", "eventrouter"], function (Backbone,EventRouter) {
    var EventModel = {
        initialize: function () {
            $.ajaxSetup({
                accepts: "application/json"
            });
            // Start monitoring all hashchange events
            //Backbone.history.start();
            //this.getEvent();
        },
        //this.Event = []; // From code initialized
        getEvent: function (eventId) {
            var routerEvent = new EventRouter();
            routerEvent.navigate("#getEvent.json", { trigger: true, replace: true });
            //$.ajax({
            //    url: "/getEvent.json",
            //    type: "GET",
            //    dataType: "json",
            //    async: false, // Chrome has a problem with async
            //    success: function (routerEvent) {
            //        //debugger;
            //        //EventModel.removeAll();
            //        //for (var i = 0; i < wsEvent.data.length; i++) {
            //        //    EventModel.event.push(wsEvent.data[i]);
            //        //}
            //        console.log("Event(s) fetched  from router for 'AC_POC'");
            //        for (var i = 0; i < routerEvent.data.length; i++) {
            //            this.Event.push(routerEvent.data[i]);
            //        }
            //        return this.Event;
            //    },
            //    error: function (data) {
            //        //debugger;  
            //        console.log("Failed to fetch event(s) from router for 'AC_POC'")
            //        return [{}];
            //    }
            //});
        },
        removeAll: function () {
            if (this.Event) {
                // Remove from element 0 to last element of array
                this.Event.splice(0, this.Event.length - 1);
            }
        }
    }
    // Return to controller
    return EventModel; // Global / Singleton
})