var application = require('Application');

module.exports = Backbone.View.extend({
    manage: true, // tests needs this

    serialize: function() {
        var res;
        if (this.model) {
            res = this.model.toJSON();
            res._me = application.me.toJSON();
            return res;
        } else if (this.collection) {
            res = this.collection.toJSON();
            res._me = application.me.toJSON();
            return res;
        } else {
            res = {};
            res._me = application.me.toJSON();
            return res;
        }
    }
});