define(["jquery", "backbone", "eventitemview"], function ($, Backbone, EventItemView) {
    var EventCollectionView = Backbone.View.extend({
        // EventCollectionView
        el: $("#eventItem"),
        initialize: function () {
            //Prepare event model
            //var eventModel = new EventModel(); // Initialize automatically called
            //Prime collection with event model data
            //this.collection = new EventCollection({model: EventModel.getEvent()}); // Here we have real data from the event model
            //this.renderEventCollection();
            console.log("EventCollection initialized");
        },
        renderEventCollection: function () {
            console.log("Event collection rendering");
            this.collection.each(function (eventItem) {
                this.renderEventItem(eventItem);
            }, this);
        },
        renderEventItem: function (eventItem) {
            console.log("Event item " + eventItem.name + " rendering");
            var eventItemView = new EventItemView({ model: eventItem, tagName: 'li', attributes: { "class": "ui-corner-top ui-corner-bottom ui-btn-up-c" } });
            this.$el.append(eventItemView.renderEventItem().el);
        }
    });
    //var eventCollectionView = new EventCollectionView();
    return EventCollectionView;
});