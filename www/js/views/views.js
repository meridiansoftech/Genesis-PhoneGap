// This view turns a Service model into HTML. Will create LI elements.
var QuoteView = Backbone.View.extend({
    tagName: 'li',
    className: 'alert-box secondary',

    events:{
        'click': 'toggleService'
    },

    initialize: function(){

        // Set up event listeners. The change backbone event
        // is raised when a property changes (like the checked field)

        this.listenTo(this.model, 'change', this.render);
    },

    render: function(){

        // Create the HTML

        this.$el.html('<blockquote>' + this.model.get('message') + '<blockquote/>' + '<p>' + this.model.get('orator') + '<p/>');
        // this.$('input').prop('checked', this.model.get('checked'));

        // Returning the object is a good practice
        // that makes chaining possible
        return this;
    },

    toggleService: function(){
        this.model.toggle();
    }
});
    
// The main view of the application
var MainAppView = Backbone.View.extend({

    // Base the view on an existing element
    el: $('#AppContainer'),

    initialize: function(){

        // Cache these selectors
        this.list = $('#quotes');

        // Listen for the change event on the collection.
        // This is equivalent to listening on every one of the 
        // service objects in the collection.
        // this.listenTo(services, 'change', this.render);

        // Create views for every one of the services in the
        // collection and add them to the page

        quotes.each(function(quote){

            var view = new QuoteView({ model: quote });
            this.list.append(view.render().el);

        }, this);	// "this" is the context in the callback
    },

    render: function(){

        // Calculate the total order amount by agregating
        // the prices of only the checked elements


        return this;
    }
});