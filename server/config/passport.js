var FacebookStrategy    = require('passport-facebook').Strategy;
var env                 = process.env.NODE_ENV || 'development';
var config              = require(__dirname + '/../config/config.json')[env];
var configAuth          = require('./auth');

module.exports = function(passport) {

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        //console.log("serialize: ", user);
        done(null, user);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        console.log("deserialize: ", id);
    });

    // facebook oauth
    passport.use(new FacebookStrategy({
        // pull in our app id and secret from our auth.js file
        clientID        : configAuth.facebookAuth.clientID,
        clientSecret    : configAuth.facebookAuth.clientSecret,
        callbackURL     : configAuth.facebookAuth.callbackURL,
        profileFields   : configAuth.facebookAuth.profileFields
    },

    // facebook will send back the token and profile
    function(token, refreshToken, profile, done) {
        // asynchronous call
        process.nextTick(function() {
            // find the user in the database based on their facebook id
            //console.log("token: ", token);
            //console.log("refresh token: ", refreshToken);
            //console.log("profile: ", profile);
            return done(null, {"token": token, "id": profile.id });
        });
    }));
};
