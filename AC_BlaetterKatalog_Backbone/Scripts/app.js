define(['jquery','underscore','backbone','eventrouter'], function ($, _, Backbone, EventRouter) {
    var initialize = function () {
        // Pass in our Router module and call it's initialize function
        EventRouter.initialize();
    }

    return {
        initialize: initialize
    };
});