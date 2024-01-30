const express = require('express');
const cookieParser = require('cookie-parser'); 

const cookies = require('./cookies');   

const app = express();
const port = 3000;


app.use(express.static('../../../Frontend/public'));

app.set('view engine', 'ejs');



app.use(cookieParser());
app.use(cookies);



app.get('/', (req, res) => {
    
    res.render('../../../../Frontend/views/home', {cookieStatus: '', color: "lightblue"});

});



app.listen(port, () => {
    console.log(`App is listening on http://localhost:${port}`);
});