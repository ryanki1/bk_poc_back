require.config({
    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        }
    },
    paths: {

        eventmodel: "../Model/eventModel",
        app: "../Scripts/app",
        wiring: "../Scripts/wiring",
        eventrouter: "../Route/eventRouter",
        jas: "../Scripts/jasmine",
        jasHTML: "../Scripts/jasmine-html",
        jquery: "../Scripts/jquery-1.7.1",
        jmobile: "../Scripts/jquery.mobile-1.1.0",
        jvalidate: "../Scripts/jquery.validate",
        eventmodelcollection: "../Collection/eventModelCollection",
        eventcollectionview: "../Views/eventCollectionView",
        eventitemview: "../Views/eventItemView",
        backbone: "../Scripts/backbone",
        underscore: "../Scripts/underscore",
    }
});

function jasInitialize() {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };

    var currentWindowOnload = window.onload;

    window.onload = function () {
        if (currentWindowOnload) {
            currentWindowOnload();
        }
        execJasmine();
    };

    function execJasmine() {
        jasmineEnv.execute();
    }

}

require(["jas", "jasHTML", "app", "backbone", "underscore", "wiring"],
    function (jas, jasHTML, App, Backbone, _, Wiring) {
        jasInitialize();
        describe("UI click", function () {
            //var router;
            var url = "/getEvent.json";
            var urlPage = "page/2170950";
            var foo = {
                page: function page(number) {
                    alert("From page method number is " + number);
                }
            }
            var bar = {
                showEventPage: function(eventId) {
                    //alert("ShowEventPage route triggered");
                    var dummy = null;
                }
            }
            //var eventRouter;
            //var dummySpy = function(){}

            beforeEach(function () {

                //spyOn(EventRouter, "getEvent");
                App.initialize();
                //spyOn(App.wiring.eventRouter, "getEvent");
                spyOn(bar, "showEventPage");
                //var router = new EventRouter();
                // it("should trigger for " + urlPage, function () {
                //router = new Backbone.Router();
                //router.route("page/:number", "page", function (number) {
                //    alert("From anonymous function number pass is " + number);
                //});
                //router.on("route:page", foo.page);
                //Backbone.history.start({pushState: true});
            });
            afterEach(function () {
                
            });

            it("should trigger getEvents", function () {
                //debugger;
                //router.navigate(urlPage, { trigger: true });
                // Simulate "eventButton" click
                expect(Backbone.history).toBeDefined();
                App.wiring.eventRouter.on("route:getEvent", bar.showEventPage);
                App.wiring.showEventPage();
                //document.location.href = "/ShowEventPage";
                expect(bar.showEventPage).toHaveBeenCalled();
            });

            it("should display all events", function () {
                expect(true).toEqual(false);
            });

            it("should display selected event", function () {
                expect(true).toEqual(false);
            });

            it("should update event", function () {
                expect(true).toEqual(false);
            });

            it("should remove event", function () {
                expect(true).toEqual(false);
            });

            it("should create event", function () {
                expect(true).toEqual(false);
            });

            xit("should trigger for " + urlPage, function () {
                //debugger;
                //router.navigate(urlPage, { trigger: true });
                window.location.href = urlPage;
                expect(foo.page).toHaveBeenCalled();
            });

            xit("should fetch events for path " + url, function () {
                //debugger;
                EventRouter.navigate(url);
                // Expect there to be at least one event coming back from the WCF Service
                expect(EventRouter.getEvent).toHaveBeenCalled();
            });

        });
    })

