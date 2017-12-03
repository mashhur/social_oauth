var express = require('express');
var passport = require('passport');
var router = express.Router();
var jwt = require('jwt-simple');

require('../config/passport')(passport);

router.get('/', function(req, res, next) {
    res.status(200).json({ success: true, errors : {} });
});

router.get('/home', isLoggedIn, function(req, res) {
    res.status(200).json({ success: true, errors : {} });
});

// route for logging out
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
