const express = require('express'); 
const router = express.Router(); 


router.get('/', (req, res) => {
    res.render('../../../../Frontend/views/home');
});

router.get('/home', (req, res) => {
    res.render('../../../../Frontend/views/home');
});

router.get('/about', (req, res) => {
    res.render('../../../../Frontend/views/about');
});


module.exports = router;