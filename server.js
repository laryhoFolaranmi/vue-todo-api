const Express = require("express");
var cors = require('cors')

const BodyParser = require("body-parser");
const TodosController = require("./src/controllers/TodosController");
require("./src/DB");

var app = Express();

// add CORS cross origin resource sharing
app.use(cors())
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true })); 

app.get("/todos", async (request, response) => {
    TodosController.index(request, response);
});

app.post("/todos", async (request, response) => {
    TodosController.create(request, response);
});

app.get("/todos/:id", async (request, response) => {
    TodosController.show(request, response);

});

app.put("/todos/:id", async (request, response) => {
    TodosController.update(request, response);

});

app.delete("/todos/:id", async (request, response) =>{
    TodosController.delete(request, response);
});

app.listen(3000, () => {
    console.log("Listening at :3000...");
});