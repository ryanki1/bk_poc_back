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

        //eventmodel: "../Model/eventModel",
        eventrouter: "../Route/eventRouter",
        jas: "../Scripts/jasmine",
        jasHTML: "../Scripts/jasmine-html",
        jquery: "../Scripts/jquery-1.7.1",
        jmobile: "../Scripts/jquery.mobile-1.1.0",
        jvalidate: "../Scripts/jquery.validate",
        //eventcollection: "../Collection/eventModelCollection",
        //eventcollectionview: "../Views/eventCollectionView",
        //eventitemview: "../Views/eventItemView",
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

require(["jas", "jasHTML", "eventrouter", "backbone", "underscore"],
    function (jas, jasHTML, EventRouter, Backbone, _) {
        jasInitialize();
        describe("Router Event", function () {
            var router;
            var url = "/getEvent.json";
            var urlPage = "page/2170950";
            var foo = {
                page: function page(number) {
                    alert("From page method number is " + number);
                }
            }
            //var eventRouter;
            //var dummySpy = function(){}

            beforeEach(function () {

                //spyOn(EventRouter, "getEvent");
                spyOn(foo, "page");
                router = new Backbone.Router();
                router.route("page/:number", "page", function (number) {
                    alert("From anonymous function number pass is " + number);
                });
                router.on("route:page", foo.page);
                Backbone.history.start({pushState: true});
            });
            afterEach(function () {
;
            });

            it("should trigger for " + urlPage, function () {
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

