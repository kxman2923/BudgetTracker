var express = require('express');
var models = require('../data/schema_models');

var router = express.Router();

router.get('/', function (req, res) {
  models.User.findOne({_id: req.session.curr_user}, function (err, user) {
    if (user) {
      res.status(200).json(user);
    }
    else {
      res.status(400).json(err);
    }
  });
});

router.get("/logged", function (req, res) {
  res.status(200).json({logged: req.session.curr_user});
});

router.get('/:uid', function (req, res) {
  models.User.findOne({_id: req.params.uid}, function (err, user) {
    if(user) {
      res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        email: user.email
      });
    } else {
      res.status(200).json({
        err: "No user by that ID"
      });
    }
  })
});

/* Add user to database */
router.post('/addUser', function (req, res) {
  var username = req.body.usernameField;
  var email = req.body.emailField;
  var fullName = req.body.fullNameField;
  var password = req.body.passwordField;

  models.User.findOne({username: username}, function (err, isTaken) {
    if (!isTaken) { // Username in use, pick new one.
      var newUser = new models.User({
        fullName: fullName,
        username: username,
        email: email,
        password: password,
      });

      newUser.save(function (error) {
        if (err) {
          res.status(400).json({err: "Unable to save new user to database. Error: " + err});
        }
        req.session.curr_user = newUser.id;
        res.status(200).json(newUser);
      });
    }

    else {
      res.status(400).json({err: "Username is not available"});
    }
  });
});

/* POST login into Fritter */
router.post('/login', function (req, res) {
  // Get data from form
  var attemptedUN = req.body.loginusername;
  var attemptedPW = req.body.loginpassword;
  // Find match between username and password
  models.User.findOne({$and:[{username: attemptedUN}, {password: attemptedPW}]}, function (err, result) {
    // DB did not find a match
    if (result) {
      req.session.curr_user = result.id;
      res.status(200).json(result);
    }
    // Login valid. Set cookies and redirect
    else if (err) {
      res.status(400).json({err: "Unable to search database for username/password combination. Error: " + err});
    }

    else {
      res.status(200).json({err: "Invalid Credentials."});
    }
  });
});


router.post('/logout', function (req, res) {
  req.session.curr_user = undefined;
  res.status(200).json({});
});

module.exports = router;
