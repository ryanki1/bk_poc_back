define(['jquery','underscore','backbone','eventrouter','wiring'], function ($, _, Backbone, EventRouter,Wiring) {
    var App = {
        initialize: function () {
            Wiring.primed();
            App.wiring = Wiring;
        }
        //wiring: null
    }
    return App;
});