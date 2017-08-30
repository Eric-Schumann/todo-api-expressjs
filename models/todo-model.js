var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Data Types:
//Number, String, Date, Boolean

var TodosSchema = new Schema({
  title: String,
  body: String,
  is_completed: Boolean,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Todos', TodosSchema);
