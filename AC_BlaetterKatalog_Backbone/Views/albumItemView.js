define(["jquery", "backbone", "underscore"], function($,Backbone,_) {
    var albumItemView = Backbone.View.extend({
        // AlbumItemView    
        template: $("templateAlbumItem").html(),
        // Usage:
        //    <li data-icon="arrow-r" data-role="list-divider">
        //        <a href="#albumPicturePage" data-transition="slide" >
        //            <strong><span class="ui-li-heading"><%= name %></span></strong>
        //        </a>
        //    </li> 
        renderAlbumItem: function(albumItem) {
            console.log("album item rendering");
            var templ = _.template(this.template);
            this.$el.html(templ(this.model.toJSON));
            return this;
        }
    });
    return albumItemView;
});