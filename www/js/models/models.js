// Create a model for the services
var Quote = Backbone.Model.extend({

    // Will contain three attributes.
    // These are their default values

    defaults:{
        message: '',
        orator: '',
        url: ''
    },

    // Helper function for checking/unchecking a service
    toggle: function(){
        this.set('checked', !this.get('checked'));
    }
});