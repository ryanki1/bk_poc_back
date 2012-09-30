//jui: "jquery-ui-1.8.20",
//jvalidate: "jquery.validate",
//knockout: "knockout-2.1.0",
//binding: "binding",
require.config({
    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        }},
    paths: {
        app: "app",
        wiring: "wiring",
        jquery: "jquery-1.7.2",
        jmobile: "jquery.mobile-1.1.1",
        backbone: "backbone",
        underscore: "underscore",
        albummodel: "../Model/albumsModel",
        eventmodel: "../Model/eventModel",
        router: "../Route/BKRouter",
        eventrouter: "../Route/eventRouter",
        albumscollection: "../Collection/albumsModelCollection",
        eventmodelcollection: "../Collection/eventModelCollection",
        albumcollectionview: "../Views/albumCollectionView",
        eventcollectionview: "../Views/eventCollectionView",
        albumitemview: "../Views/albumItemView",
        eventitemview: "../Views/eventItemView"
    },
    waitSeconds: 15
});

//require(["app","jquery", "backbone","jmobile","domReady!"],
require(["app", "jmobile", "domReady!"],
    function (App) {
        console.log("main's turn");
        // Start monitoring all hashchange events
        App.initialize();
        //debugger; When this statement active $("#albumList li a") present, otherwise not.
        //$("#albumList li a").click(function () {
        //    ancestorLi = this.parentElement;
        //    var albumIndex = $.inArray(ancestorLi, $("#albumList li"));
        //    console.log("Album " + albumIndex + " clicked :-)");
        //    AlbumsModel.getAlbumPicture(AlbumsModel.album()[albumIndex]);
        //});
    });