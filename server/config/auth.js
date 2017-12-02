module.exports = {

    'facebookAuth' : {
        'clientID'      : 'your-consumer-key',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:4004/auth/facebook/callback',
        'profileFields' : ['id', 'displayName', 'photos', 'email'] // For requesting permissions from Facebook API
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    },

    'linkedInAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/linkedin/callback'
    }

};