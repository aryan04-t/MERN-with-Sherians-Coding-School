const express = require('express');
const session = require('express-session');            // Including session package 


const userSession = require('./userSession');    // Including custom session data that we've created for user 



const app = express();
const port = 3000;


app.use(express.static('../../../Frontend/public'));

app.set('view engine', 'ejs');


app.use(session({
    resave: false,                   // If same session is going on, then don't keep resaving same data 
    saveUninitialized: false,        // Don't send unititalized data to client 
    // Above both lines of code reduce load on sever
    secret: 'hehehe'                 // Using this secret string data on server is encrypted 
}));   



app.use(userSession);



app.get('/', (req, res) => {
    res.render('../../../../Frontend/views/home');
});



app.listen(port, () => {
    console.log(`App is listening on http://localhost:${port}`);
});