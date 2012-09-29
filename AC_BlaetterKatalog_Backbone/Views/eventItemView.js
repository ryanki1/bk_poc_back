define(["jquery", "backbone", "underscore"], function ($, Backbone, _) {
    var EventItemView = Backbone.View.extend({
        // AlbumItemView    
        template: $("templateEventItem").html(),
        // Usage:
        //    <li data-icon="arrow-r" data-role="list-divider">
        //        <a href="#albumPicturePage" data-transition="slide" >
        //            <strong><span class="ui-li-heading"><%= name %></span></strong>
        //        </a>
        //    </li> 
        renderEventItem: function (albumItem) {
            console.log("event item rendering");
            var templ = _.template(this.template);
            this.$el.html(templ(this.model.toJSON));
            return this;
        }
    });
    //var eventItemView = new EventItemView();
    return EventItemView;
});