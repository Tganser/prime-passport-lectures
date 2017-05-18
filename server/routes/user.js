var express = require('express');
var router = express.Router();
var passport = require('passport');
var Item = require('../models/items.model');
var path = require('path');

// Handles Ajax request for user information if user is authenticated
router.get('/', function(req, res) {
  console.log('get /user route');
  // check if logged in
  if(req.isAuthenticated()) {
    // send back user object from database
    console.log('logged in');
    res.send(req.user);
  } else {
    // failure best handled on the server. do redirect here.
    console.log('not logged in');
    // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
    res.send(false);
  }
});

// clear all server session information about this user
router.get('/logout', function(req, res) {
  // Use passport's built-in method to log out the user
  console.log('Logged out');
  req.logOut();
  res.sendStatus(200);
});

router.post('/', function(req, res) {
    console.log('in /addItem route');
    console.log('user ->', req.session.passport.user);
    req.body.user = req.session.passport.user;
    Item.create(new Item(req.body), function(err, post) {
      console.log('req.body ->', req.body);
         if(err) {
           // next() here would continue on and route to routes/index.js
            res.sendStatus(500);
         } else {
          // route a new express request for GET '/'
          // Item.save();
          console.log('success!');
         }
    });
});


module.exports = router;
