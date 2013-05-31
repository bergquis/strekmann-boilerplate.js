var View = require('views/View'),
    template = require('templates/indexLayout');

module.exports = View.extend({
    template: template,
    tagName: 'div',
    className: 'container'
});