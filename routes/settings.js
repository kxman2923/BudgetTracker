var express = require('express');
var models = require('../data/schema_models');

var router = express.Router();

/* Directs to settings page*/
router.get('/', function (req, res) {
  models.User.findOne({_id: req.session.curr_user}, function (err, user) {
    res.status(200).json({
      username: user.username,
      fullName: user.fullName
    });
  });
});

/* Change username */
router.post('/changeUsername', function (req, res) {
  // var newUsername = req.body.usernameField;
  models.User.findOne({_id: req.session.curr_user}, function (err, user) {
    if (user) {
      models.User.findOne({username: username}, function (err, nameTaken) {
        if (nameTaken) {
          res.status(200).json ({ // stay on status, state that the username is unavailable
            err: "Username is unavailable"
          });
        }
        else {
          user.username = req.body.usernameField;
          user.save(function (error) {
            if (error) {
              res.status(400).json({err: "Unable to change username. Error: " + error});
            }
            else {
              res.status(200).json(user);
            }
          });
        }
      });
    }
  });
});

/* Change full name */
router.post('/changeFullName', function (req, res) {
  // var newFullName = req.body.fullNameField;
  models.User.findOne({_id: req.session.curr_user}, function (err, user) {
    user.fullName = req.body.fullNameField;
    user.save(function (error) {
      if (error) {
        res.status(400).json({err: "Unable to change full name. Error: " + error});
      }
      else {
        res.status(200).json(user);
      }
    });
  });
});

/* Change email */
router.post('/changeEmail', function (req, res) {
  // var newEmail = req.body.emailField;
  models.User.findOne({_id: req.session.curr_user}, function (err, user) {
    user.email = req.body.emailField;
    user.save(function (error) {
      if (error) {
        res.status(400).json({err: "Unable to change email. Error: " + error});
      }
      else {
        res.status(200).json(user);
      }
    });
  });
});

/* Change password */
router.post('/changePassword', function (req, res) {
  // var newPassword = req.body.passwordField;
  models.User.findOne({_id: req.session.curr_user}, function (err, user) {
    user.password = req.body.passwordField;
    user.save(function (error) {
      if (error) {
        res.status(400).json({err: "Unable to change password. Error: " + error});
      }
      else {
        res.status(200).json(user);
      }
    });
  });
});

/* Delete user from database */
router.delete('/deleteUser', function (req, res) {
  models.User.findOneAndRemove({_id: req.session.curr_user}, function (err, user) {
    if (err) {
      res.status(400).json({err: "Unable to delete user. Error: " + err});
    }
    else {
      req.session.curr_user = undefined;
      res.status(200).json({});
    }
  });
});

module.exports = router;
