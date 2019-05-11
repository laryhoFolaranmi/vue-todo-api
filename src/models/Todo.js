const Mongoose = require("mongoose");

let TodoModel = Mongoose.model('todo',{
    title: String,
    completed: Boolean
});

module.exports = TodoModel;