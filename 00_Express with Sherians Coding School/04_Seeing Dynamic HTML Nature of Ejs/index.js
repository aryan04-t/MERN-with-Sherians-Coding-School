const express = require('express');

const port = 8000;
const app = express();


app.set('view engine', 'ejs');

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home'); 
})



app.get('/:name', (req, res) => {
    res.render('hello', {name: req.params.name}); 
});



app.listen(port, () => {
    console.log(`port is listening, check out this link: http://localhost:${port}`); 
}); 