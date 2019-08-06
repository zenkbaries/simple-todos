const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema for todo
// const TodoSchema = new Schema({
//   action: {
//     type: String,
//     required: [true, 'The todo text field is required']
//   }
// });

let TodoSchema = new Schema({
  action: {
    todo_description: {
        type: String
    },
    todo_responsible: {
        type: String
    },
    todo_priority: {
        type: String
    },
    todo_completed: {
        type: Boolean
    }
  }
});

//create model for todo
const Todo = mongoose.model('todo', TodoSchema);
// const Todo = mongoose;


module.exports = Todo;