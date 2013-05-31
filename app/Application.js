Application = {
    initialize: function() {
        // we want our views to be managed by layoutmanager
        Backbone.Layout.configure({
            manage: true
        });

        var Router = require('routers/Router');
        this.router = new Router();

        var Me = require('models/Me');
        var me = new Me();
        this.me = me;

        return me.fetch();
    }
};

module.exports = Application;