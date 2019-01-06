const mongoose = require('mongoose');

// for debugging connection btw database

mongoose.set('debug',true);

mongoose.connect('mongodb://localhost:27017/todo-api');

// using mongoose promise to prevent callback

mongoose.Promise = Promise;


module.exports.Todo = require('./todo')