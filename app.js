var express = require('express');

var app = express();

var todoController = require("./controllers/todoController")

app.set('view engine','ejs');  // template engine

app.use(express.static('assets'))  //static file

app.listen(3000);    //Listening to a port
console.log('The server is listening on port 3000');

todoController(app);


