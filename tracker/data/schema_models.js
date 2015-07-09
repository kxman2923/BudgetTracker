var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  fullName:  String,
  username: String,
  email: String,
  watchedBudgets: [{type: String, ref: 'Budget'}],
  moderatedBudgets: [{type: String, ref: 'Budget'}],
  password: String,
});

var BudgetSchema = new Schema({
  name: String,
  admin : {type: String, ref: 'User'},
  watchers: [{type: String, ref: 'User'}],
  parentBudget: { type: String, ref:'User', default: ""},
  childBudgets: [{type: String, ref: 'Budget'}],
  total: { type: Number, default: 0 },
  listOfCosts: [{type: String, ref: 'Cost'}],
});

var CostSchema = new Schema({
  name: String,
  value: Number,
  time: String,
  tag: String,
  description: { type: String, default: "" },
});

exports.Budget = mongoose.model('Budget', BudgetSchema);
exports.Cost = mongoose.model('Cost', CostSchema);
exports.User = mongoose.model('User', UserSchema);
