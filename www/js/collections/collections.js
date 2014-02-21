// Create a collection of quotes
var QuoteCollection = Backbone.Collection.extend({

    // Will hold objects of the Quote model
    model: Quote,

    // Return an array only with the checked services
    getChecked: function(){
        return this.where({checked:true});
    }
});

// Prefill the collection with a number of quotes.
var quotes = new QuoteCollection([
    new Quote({ message: 'I have not failed. I’ve just found 10,000 ways that won’t work', orator: 'Thomas A. Edison' }),
    new Quote({ message: 'Whenever you find yourself on the side of the majority, it is time to pause and reflect.', orator: 'Mark Twain' }),
    new Quote({ message: 'Live as if you were to die tomorrow. Learn as if you were to live forever.', orator: 'Mahatma Gandhi' }),
    new Quote({ message: 'You have to learn the rules of the game. And then you have to play better than anyone else.', orator: 'Albert Einstein' })
    // Add more here
]);