/**
 * \import modules 
 */
const express = require('express');
const app = express();
const todosRoutes = require('./routes/todos');
const bodyParser = require('body-parser');
const port = process.env.PORT|| 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/asset',express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/views'));

app.get('/',(req,res) => {
    res.sendFile("index.html")
});

app.use('/api/todos',todosRoutes)


app.listen(port,function(){
    console.info("application now online on port " + port )
})
