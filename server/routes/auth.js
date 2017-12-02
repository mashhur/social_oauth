const express = require('express');
const validator = require('validator');
var   bcrypt = require('bcrypt');
var   passport = require('passport');

var   env       = process.env.NODE_ENV || 'development';
var   config    = require(__dirname + '/../config/config.json')[env];

const router = new express.Router();

router.get('/facebook', passport.authenticate('facebook'));

// handle the callback after facebook has authenticated the user
router.get('/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/' }),
    function(req, res) {
        // Successful authentication, redirect home.
        //res.redirect('/home');
        //console.log(req);
        // console.log(user.token);
        res.status(200).json({ success: true, errors : {} });
    }
);

module.exports = router;
