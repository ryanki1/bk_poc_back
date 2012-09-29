define(["jquery", "backbone", "albumscollection","albumitemview"], function ($, Backbone, AlbumsCollection, AlbumItemView) {
    var albumCollectionView = Backbone.View.extend({
        // AlbumCollectionView
        el: $("#albumList"),
        initialize: function () {
            console.log("albumPageCollection initialized");
            this.collection = new AlbumsCollection();
            this.renderAlbumCollection();
        },
        renderAlbumCollection: function () {
            console.log("album collection rendering");
            this.collection.each(function (albumItem) {
                this.renderAlbumItem(albumItem);
            },this);
        },
        renderAlbumItem: function (albumItem) {
            console.log("album item " + albumItem.name + " rendering");
            var albumItemView = new AlbumItemView({ model: albumItem, tagName: 'li', attributes: { "class": "ui-corner-top ui-corner-bottom ui-btn-up-c" } });
            this.$el.append(albumItemView.renderAlbumItem().el);
        }
    });
    return albumCollectionView;
});