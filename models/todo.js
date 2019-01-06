/*
 * schema - database structure
 */


const mongoose = require('mongoose');

var toDoSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:'Name can not be ommitted'
    },
    completed:{
        type:Boolean,
        default:false
    },
    created_date:{
        type:Date,
        default:Date.now
    }
})

var Todo  = mongoose.model('Todo',toDoSchema);
module.exports = Todo;