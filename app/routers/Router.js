var IndexView = require('views/IndexLayout');

module.exports = Backbone.Router.extend({
    routes: {
        '': 'index',
        '*default': 'notfound'
    },

    index: function(){
        this.current = new IndexView();
        $('#content').html(this.current.$el);
        this.current.render();
    },

    notfound: function(){
        $('#content').html('<p>404 - Not Found!</p>');
    }
});
