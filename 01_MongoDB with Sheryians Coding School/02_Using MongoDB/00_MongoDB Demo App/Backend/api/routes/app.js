const express = require("express");

const app = express();
const port = 5000;


const navbar = require('./navbar'); 
const createUser = require('./createUser'); 
const fetchAllUsers = require('./fetchAllUsers'); 
const fetchOneUser = require('./findOneUser'); 
const deleteOneUser = require('./deleteOneUser');


app.use(express.static('../../../Frontend/public'));

app.set('view engine', 'ejs');


app.use(navbar); 
app.use(createUser); 
app.use(fetchAllUsers); 
app.use(fetchOneUser); 
app.use(deleteOneUser);


app.listen(port, () => { 
    console.log(`listening on port http://localhost:${port}`); 
}); 