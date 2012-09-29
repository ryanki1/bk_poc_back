define(["backbone","underscore","albummodel"], function (Backbone,_,AlbumsModel) {
    var albumsModelCollection = Backbone.Collection.extend({
        model: AlbumsModel.getAlbums("baileysfertilisers")
    });
    return albumsModelCollection;
})
