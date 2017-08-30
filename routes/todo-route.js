var express = require('express');
var router = express.Router();

var Todos = require('../models/todo-model.js');

router.get('/', function(req, res) {
  res.send('Welcome to the routed page!');
});

router.get('/todos', function(req, res) {
  Todos.find(function(err, todos) {
    if (err)
      res.send(err);
    res.json(todos);
  });
})

router.get('/todo/:todos_id', function(req, res) {
  var id = req.params.todos_id
  Todos.findById(id, function(err, todo) {
    if (err)
      res.send(err);
    res.json(todo);
  });
});

router.delete('/todo/:todos_id', function(req, res) {
  var id = req.params.todos_id;
  Todos.remove({_id: id}, function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'Successfully deleted todo '});
  });
});

router.put('/todo/:todos_id', function(req, res) {
  var id = req.params.todos_id;
  Todos.findById(id, function(err, todo) {
    if (err)
      res.send(err);

    todo.is_completed = req.body.is_completed;

    todo.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Task updated!' });
    });
  });
});

router.post('/todo', function(req, res) {
  var todo = new Todos();
  todo.title = req.body.title;
  todo.body = req.body.body;
  todo.is_completed = false;

  todo.save(function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'Todo created!' });
  });
});

module.exports = router;
