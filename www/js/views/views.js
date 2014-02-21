var LandingView = Backbone.View.extend({
    tagName: "article", 
    className: "app-intro", 
    template: $("#introTemplate").html(),
    
    render: function(){
        var tmpl = _.template(this.template);
        this.$el.html(tmpl(this.model.toJSON()));
        return this;
    }
});

var MasterView = Backbone.View.extend({
    el: $("#AppContainer"), 
    
    initialise: function(){
        this.collection = new Directory();
        this.render();
    },
    
    render: function(){
        var that = this;
        
        _.each(this.collection.models, function(item){
            that.renderContact(item);
        }, this);
    },
    
    renderContact: function(item){
        var landingView = new LandingView({
            model: item
        });
        this.$el.append(landingView.render().el);
    }
});