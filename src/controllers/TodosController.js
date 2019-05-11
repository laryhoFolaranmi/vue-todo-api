const TodoModel = require("../models/Todo");

let TodosController = {
    /*
        get all todos from the database    
    */
    async index(request, response){
        try {
            let todos = await TodoModel.find().exec();
            response.send(todos);
        } catch (err) {
            response.status(500).send(err);
        }
    },

    /*
        create a todo and store in the database
    */
    async create(request, response){
        try{
            let todo = new TodoModel(request.body);
            let result = await todo.save();
            response.send(result);  
        }catch(err){
            response.status(500).send(err);
        }
    },

    /*
        showa single todo using its id
    */
    async show(request, response){
        try{
            let todo = await TodoModel.findById(request.params.id).exec();
            response.send(todo);
        }catch(err){
            response.status(500).send(err);
        }
    },

    /*
        update the specified todo using its id
    */
    async update(request, response){
        try{
            let todo = await TodoModel.findById(request.params.id).exec();
            todo.set(request.body);
            let result = await todo.save();
            response.send(result);
        }catch(err){
            response.status(500).send(err);
        }
    },

    /*
        delete single todo
    */
    async delete(request, response){
        try{
            let result = await TodoModel.deleteOne({_id: request.params.id}).exec();
            response.send(result);
        }catch(err){
            response.status(500).send(err);
        }
    }
}

module.exports = TodosController;