# Starting to Use MongoDB in our Application: 

- Run this command to download mongoose module from npm 

* Command: `npm i mongoose` 

- Now just use this line of code to connect your API written in Express to connect to the MongoDb database once you have started the MongoDB database on localhost:27017 


``` 

# Code: 

const mongoose = require('mongoose'); 
mongoose.connect('mongodb://127.0.0.1:27017/Mention_Your_Database_Name_Here'); 


```