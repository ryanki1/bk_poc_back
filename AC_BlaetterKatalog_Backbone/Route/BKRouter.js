define(["jquery","backbone","albummodel"], function ($,Backbone,AlbumsModel) {
    var BKRouter = Backbone.Router.extend({
        routes: {
            "getAlbum.json/:albumName": "getAblums",
            "album/:albumId/photo.json": "getAlbumPicture"
        },
        getAlbums: function (albumName) {
            // Sample usage: #getAlbum.json/baileysfertilisers  
            $.ajax({
                url: "https://graph.facebook.com/" + albumName + "/albums",
                data: { "fields": "id,name,cover_photo" },
                type: "GET",
                dataType: "json",
                async: false, // Chrome has a problem with async
                success: function (fbAlbum) {
                    //debugger;
                    AlbumsModel.album.removeAll();
                    for (var i = 0; i < fbAlbum.data.length; i++) {
                        albumsModel.album.push(fbAlbum.data[i]);
                    }
                    console.log("Facebook Albums fetched and loaded into Model from router for 'Baileys Fertilisers'");
                    return fbAlbum.data;
                },
                error: function (data) {
                    //debugger;  
                    console.log("Failed to fetch from router facebook albums for 'Baileys Fertilisers'")
                    return {}
                }
            });
            return AlbumsModel.getAlbums(albumName);
        },
        getAlbumPicture: function (albumId) {
            // Sample usage: #album/397187640312454/photo.json   
            $.ajax({
                url: "https://graph.facebook.com/" + album.id + "/photos",
                data: { "fields": "id,name,picture" },
                type: "GET",
                dataType: "json",
                async: false, // Chrome has a problem with async
                success: function (fbAlbumPicture) {
                    //debugger;
                    albumsModel.albumPicture.removeAll();
                    for (var i = 0; i < fbAlbumPicture.data.length; i++) {
                        albumsModel.albumPicture.push(fbAlbumPicture.data[i]);
                    }
                    console.log("Facebook pictures fetched from router for album " + album.name);
                    return fbAlbumPicture.data;
                },
                error: function (data) {
                    //debugger;   
                    console.log("Failed to fetch album pictures from router")
                    return {}
                }
            });
        }
    });
    return new BKRouter();
})