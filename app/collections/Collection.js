module.exports = Backbone.Collection.extend({
    parse: function(response) {
        if (response._meta) {
            this.meta = response._meta;
        }

        var data;
        if (response._data) {
            data = response._data;
        } else {
            data = response;
        }
        return data;
    }
});