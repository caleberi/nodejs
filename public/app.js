$(document).ready(() => {
    $.getJSON("/api/todos")
    .then((data) => {
        addToDos(data)
    })

    $('#todoInput').keypress((e) => {
        if(e.which === 13){
            createTodo(e.target.value)
        }
    })
    $('.list').on('click','li',function(){
        updateTodo($(this))
    });
    $('.list').on('click','span',function(e){
        e.stopPropagation();
        removeTodo($(this).parent()); 
    })
})


function updateTodo(todo){
    var updateUrl =  '/api/todos/'+todo.data('id');
    var isDone = !todo.data('completed');
    var updateData = {completed: isDone};
    $.ajax({
        method:'PUT',
        url:updateUrl,
        data:updateData
    }).then(function(updatedTodo){
        
        todo.toggleClass('done');
        todo.data('completed',isDone);
     })
     .catch((err) => {
        console.log(err)
    })
}

function removeTodo(todo){
    var clickedId =  todo.data('id');
    var deleteUrl = `/api/todos/${clickedId}`;
    $.ajax({
        method:'DELETE',
        url:deleteUrl
    }).then((data) => {
        todo.remove();
    }).catch((err) => {
        console.log(err)
    })
}

function addToDos(todos){
    todos.forEach(todo => {
       addToDo(todo)
    });
}

function addToDo(todo){
    var newTodo = $('<li>'+todo.name+'<span>x</span></li>');
    newTodo.data('id',todo._id);
    newTodo.data('completed',todo.completed);
    newTodo.addClass('task');
    if(todo.completed){
        newTodo.addClass('done');   
    }
    $('.list').append(newTodo);
}

function createTodo(value){
    $.post('/api/todos',{name:value})
    .then((data) => {
        addToDo(data)
        $('#todoInput').val('');
    }).catch((err) => {
        console.log(err);
    })
}