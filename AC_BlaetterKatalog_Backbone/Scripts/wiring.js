define(["jquery","eventrouter"], function ($,EventRouter) {
    var Wiring = {
        primed: function () {
            //debugger;
            //Route UI events like "show events page" to desired behaviours
            Wiring.eventRouter = new EventRouter();
            Wiring.showPage();
        },
        showPage: function () {
            //debugger;
            $(document).on("pageshow", function (event) { // Router controls which views to render
                debugger;
                //if ($(prevPage).attr("id") == "albumPage") console.log("albumPicture page showed");
                if ($(event.target).attr("id") == "eventCollection") {
                    // Events Page
                    //var eventCollectionView = new EventCollectionView();
                    Wiring.showEventPage();
                }
            });
        },
        showEventPage: function () {
            //debugger;          
            Wiring.eventRouter.navigate("ShowEventPage", { trigger: true});
        }
    }
    return Wiring;
})