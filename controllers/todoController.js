const db =  require('../models');



exports.getToDos = (req,res) => {
    // find data then get all the todos then turn it to json
    db.Todo.find().then((todos) => {
        res.json(todos);
    })
}


exports.postToDos = (req,res) => {
    db.Todo.create(req.body).then((newTodo) => {
        res.status(201).json(newTodo)
    }).catch((err) => {
        res.send(err)
    })
}

exports.getToDo = (req,res) => {
    db.Todo.findById(req.params.todoId).then((foundTodo) => {
        res.json(foundTodo)        
    }).catch((err) => {
        res.send(err);
    })
}

exports.updateToDo = (req,res) => {
    db.Todo.findOneAndUpdate({_id:req.params.todoId},req.body,{new : true}).then((data) => {
         res.json(data);
    }).catch((err) => {
    console.log(err)
    })
}

exports.deleteToDo = (req,res) => {
    db.Todo.remove({_id:req.params.todoId}).then(() => {
         res.json({message:"deleted"});
    }).catch((err) => {
        res.send(err);
    })
}


module.exports =  exports;