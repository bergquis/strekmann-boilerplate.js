var application = require('Application');

$(function() {
    application.initialize().then(function() {
        // -- initialization done, start backbone
        Backbone.history.start({pushState: true});
        
        
        // -- backbone app is done initialized, run plugins/configs
        if (Backbone.history && Backbone.history._hasPushState) {
            // Use delegation to avoid initial DOM selection and allow all matching
            // elements to bubble
            $(document).delegate("a", "click", function(evt) {
                // Get the anchor href and protcol
                var href = $(this).attr("href");
                var protocol = this.protocol + "//";

                // Ensure the protocol is not part of URL, meaning its relative.
                // Stop the event bubbling to ensure the link will not cause a page
                // refresh.
                if (href && href.slice(protocol.length) !== protocol && 
                    $(this).data('ext') === undefined && href !== '#' &&
                    href.indexOf('javascript') !== 0) {
                    
                    evt.preventDefault();

                    // Note by using Backbone.history.navigate, router events will not
                    // be triggered.  If this is a problem, change this to navigate on
                    // your router.
                    Backbone.history.navigate(href, true);
                }
            });
        }        
    });
});