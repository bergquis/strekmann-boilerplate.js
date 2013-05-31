var passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function(app){
	passport.serializeUser(function(user, done) {
		done(null, {name: user.displayName, active: 1});
	});

	passport.deserializeUser(function(obj, done) {
		done(null, obj);
	});

	passport.use(new GoogleStrategy({
			clientID: app.conf.auth.google.clientId,
		    clientSecret: app.conf.auth.google.clientSecret,
		    callbackURL: "http://localhost:3100/auth/google/callback"
		},
	  	function(accessToken, refreshToken, profile, done) {
    		// asynchronous verification, for effect...
    		process.nextTick(function () {
	      		// To keep the example simple, the user's Google profile is returned to
	      		// represent the logged-in user.  In a typical application, you would want
	      		// to associate the Google account with a user record in your database,
	      		// and return that user instead.
	      		return done(null, profile);
	    	});
	  	}
	));

	return passport;
};