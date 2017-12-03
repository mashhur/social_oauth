const express   = require('express');
const validator = require('validator');
const passport  = require('passport');
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/../config/config.json')[env];

var router    = new express.Router();

router.get('/facebook', passport.authenticate('facebook'));

// handle the callback after facebook has authenticated the user
router.get('/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/' }),
    function(req, res) {
        // Successful authentication, redirect home.
        //console.log(req);
        // console.log(user.token);
        res.redirect('/home');
    }
);

module.exports = router;
