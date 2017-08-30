var express = require('express');
var app = express();
var mongoose = require('mongoose');

var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/todos', {
  useMongoClient: true
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var todoRoute = require(__dirname + '/routes/todo-route.js');
app.use('/api', todoRoute);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/templates/index.html');
});

app.listen(PORT);
console.log('Listening on port: ' + PORT);
