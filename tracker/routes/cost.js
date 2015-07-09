var express = require('express');
// var data = require('../api/datamodel');
var models = require('../data/schema_models');
var router = express.Router();

//POST to add a new Cost object
router.post('/addCost', function(req,res){
		if(req.session.curr_user){

			var c = new models.Cost({
				name : req.body.name,
				value: req.body.value,
				time: req.body.time,
				tag: req.body.tag,
				description: req.body.desc,
			});

			c.save(function(err){
				if(err){
					console.log("Something went wrong!");
					res.status(400).json({err: "Can't add that cost object"});
				}
				else{
					//Add that cost object to the Budget list of cost objects
					models.Budget.findOneAndUpdate({"_id": req.body.bid},
						{$push: {listOfCosts: c._id.toString()}}, function(err, doc){
						res.status(200).json(c);
					});
				}
			});
		}
		else{
			res.status(400).json({err: "Not logged in!"});
		}
});

//POST to delete a cost object
router.delete('/deleteCost', function(req,res){
	if(req.session.curr_user){
		models.Cost.findOneAndRemove({"_id": req.body.cid}, function(err,doc){
			if(err){
				res.status(400).json({err: "Error in deleting that cost object "+req.body.cid});
			} else{
				//Deletes cost object from its respective budget's list of cost objects
				models.Budget.findOneAndUpdate({"_id": req.body.bid},
					{$pull : {listOfCosts: doc._id.toString()}}, function(err2, removed){
					if(err2){
						res.status(400).json({err: "Can't save that new list object in the Budget!"});
					} else{
						res.status(200).json({});
					}
				});
			}
		});
	} else{
		res.status(400).json({err: "Not logged in!"});
	}
});

//get methods to retrieve cost object, value, time, name, description, and tags
router.get('/:cid', function(req,res){
	if(req.session.curr_user){
		models.Cost.findOne({"_id": req.params.cid}, function(err,doc){
			if(err){
				res.status(400).json({err: "Error in retrieving that cost object "+req.params.cid});
			}
			else{
				res.status(200).json(doc);
			}
		});
	} else{
		res.status(400).json({err: "Not logged in!"});
	}
});

module.exports= router;
