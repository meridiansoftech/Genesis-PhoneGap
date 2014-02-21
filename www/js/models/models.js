// Create a model for the services
var Quote = Backbone.Model.extend({

    // Will contain three attributes.
    // These are their default values

    defaults:{
        message: 'Getting started with Foundation is easy',
        orator: 'Foundation Team',
        url: 'http://foundation.zurb.com/docs/'
    },

    // Helper function for checking/unchecking a service
    toggle: function(){
        this.set('checked', !this.get('checked'));
    }
});