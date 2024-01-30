const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Demo');           // This mongoDB set-up will make database named 'Demo' inside MongoDB which is running on local host on port number 27017 

// mongoose.connect('mongodb://localhost:27017'); 



// Defining Schema of a document 

const userSchema = mongoose.Schema({
    username: String,
    age: Number,
    name: String
}); 

// This above written schema defines that in which format the data will stored inside each document 



module.exports = mongoose.model("user", userSchema);

// This above line of code creates a collection named "user" inside our database which is named "Demo", and inside this collection each user's data will be stored in a single document, and how will that document look like is defined by schema and here it is our "userSchema" which we have defined above 