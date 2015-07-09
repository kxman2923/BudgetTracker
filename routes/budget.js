var express = require('express');
var models = require('../data/schema_models');
var router = express.Router();

// Returns the budget object based on id
router.get("/:bid", function(req, res) {
    models.Budget.findOne({_id: req.params.bid}, function(err, bdoc) {
        res.status(200).json(bdoc);
    });
});

// Adds budget into database
router.post("/addBudget", function(req, res) {
    if(req.session.curr_user) {
        budget = new models.Budget({
            name: req.body.name,
            admin: req.session.curr_user,
            total: req.body.total,
        }); // new budget object

        budget.save(function(err) {
            //add budget to admins moderated budgets
            models.User.findOneAndUpdate({_id: req.session.curr_user}, {$push: {moderatedBudgets: budget._id}}, function(err, doc) {
                res.status(200).json(budget);
            });
        });
    } else {
        res.status(400).json({err: "Not Logged In"})
    }
});

// remove a budget from database
router.delete("/:bid", function(req, res) {
    models.Budget.findOne({_id: req.params.bid}, function(err, doc) {
        if(req.session.curr_user == doc.admin) {
            models.Budget.findOneAndRemove({_id: req.params.bid}, function(err, rdoc) {
                models.User.findOne({_id: doc.admin}, function(err, adoc) {
                    var mod = [];
                    for(var i=0; i<adoc.moderatedBudgets.length; i++) {
                        if(adoc.moderatedBudgets[i]._id != req.params.bid) {
                            mod.push(adoc.moderatedBudgets[i]);
                        }
                    }
                    adoc.moderatedBudgets = mod; //remove budget from moderated budgets
                    adoc.save(function(err) {
                        res.status(200).json({});
                    });
                });
            });
        } else {
            res.status(400).json({err:"Current user is not a moderator."});
        }
    });
});

// add a watcher to a budget
router.put("/addWatcher", function(req, res) {
    models.User.findOne({username: req.body.uname}, function(err, udoc) {
        models.Budget.findOne({_id: req.body.bid}, function(err, bdoc) {
            if(bdoc.admin == req.session.curr_user && udoc
                && udoc._id != bdoc.admin && bdoc.watchers.indexOf(udoc._id)===-1){
                bdoc.watchers.push(udoc._id);
                bdoc.save( function(err) {
                    udoc.watchedBudgets.push(bdoc._id);
                    udoc.save(function(err) { //add budget to watchedBudgets
                        res.status(200).json(bdoc);
                    });
                });
            } else if(!udoc) {
                res.status(200).json({err: "User does not exist"});
            } else if(udoc._id==bdoc.admin){
                res.status(200).json({err: "Admin cannot be a watcher!"});
            } else if(bdoc.watchers.indexOf(udoc._id) !=-1){
                res.status(200).json({err: "That user was already added as a watcher!"});
            }
            else {
                res.status(400).json({err: "Current user is not a moderator."});
            }
        });
    });
});

//remove a watcher from a budget
router.put("/removeWatcher", function(req, res) {
    models.Budget.findOne({_id: req.body.bid}, function(err, doc) {
        if(doc.admin == req.session.curr_user) {
            var watchers = [];
            for(var i=0; i<doc.watchers.length; i++) {
                if(doc.watchers[i] != req.body.uid) {
                    watchers.push(doc.watchers[i]);
                }
            }
            doc.watchers = watchers;
            doc.save(function(err) { // remove user from watchers
                // models.User.findOne({_id: doc.admin}, function(err, wdoc) {
                models.User.findOneAndUpdate({_id: req.body.uid}, {$pull:{watchedBudgets: doc._id}},
                    function(err,wdoc) {
                        res.status(200).json(doc);
                    // var mod = [];
                    // for(var i=0; i<wdoc.moderatedBudgets.length; i++) {
                    //     if(wdoc.moderatedBudgets[i]._id != doc._id) {
                    //         mod.push(wdoc.moderatedBudgets[i]);
                    //     }
                    // }
                    // wdoc.moderatedBudgets = mod; //remove budget from watched budgets

                    // wdoc.save(function(err) {
                    //     res.status(200).json(doc);
                    // });
                });
            });
        } else {
            res.status(400).json({err: "Current user is not a moderator."});
        }
    });
});

module.exports = router;
