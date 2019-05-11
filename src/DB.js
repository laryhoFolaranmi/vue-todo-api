const Mongoose = require("mongoose");

let server = "localhost:27017";
let db = "tododb";

Mongoose.connect(process.env.MONGODB_URI || `mongodb://${server}/${db}`, {useNewUrlParser: true})
.then( () => {
    console.log("db connection successful");
})
.catch( err => {
    console.log("error connecting to db: "+err);
})

