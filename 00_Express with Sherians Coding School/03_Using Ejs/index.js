const express = require('express');

const port = 5000;
const app = express();


app.set('view engine', 'ejs');
app.use(express.static('public'));



app.get('/', (req, res) => {
    res.render('googleHomePage'); 
})



app.listen(port, () => {
    console.log(`port is listening, check out this link: http://localhost:${port}`); 
}); 