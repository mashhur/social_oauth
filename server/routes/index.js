var express = require('express');
var passport = require('passport');
var router = express.Router();
var jwt = require('jwt-simple');

require('../config/passport')(passport);

router.get('/', function(req, res, next) {
    res.status(200).json({ success: true, errors : {} });
});

router.get('/home', function(req, res) {
    if(req.header("token") == undefined)
        res.redirect('/');
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
    console.log("isLoggedIn func fired.");
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();


    console.log("redirecting to home.");
    // if they aren't redirect them to the home page
    res.redirect('/');
}
