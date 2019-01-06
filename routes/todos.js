const express = require('express');

const router =  express.Router(); // creates a mini express server router


const db = require('../models/');

const helpers =  require('../controllers/todoController')

router.route('/')
    .get(helpers.getToDos)
    .post(helpers.postToDos)


// get a particular todo // update using put
router.route('/:todoId')
    .get(helpers.getToDo)
    .put(helpers.updateToDo)
    .delete(helpers.deleteToDo)


module.exports =  router;