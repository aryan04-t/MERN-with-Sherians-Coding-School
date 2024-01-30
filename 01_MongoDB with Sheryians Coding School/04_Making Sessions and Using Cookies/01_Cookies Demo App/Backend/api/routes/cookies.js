const express = require('express');
const router = express.Router();


router.get('/createCookie', (req, res) => {
    
    res.cookie("age", 20);

    res.render('../../../../Frontend/views/home', {cookieStatus : "Cookie has been successfully created.", color: "yellow"}); 

});


router.get('/readCookie', (req, res) => {
    
    console.log(req.cookies.age);                  // Always remember, here we use req object because cookies are stored at client side, so we can acces them using the req object 

    res.render('../../../../Frontend/views/home', {cookieStatus : "Cookie has been read successfully.", color: "aqua"});

});


router.get('/clearCookie', (req, res) => {
    
    res.clearCookie("age"); 
    res.render('../../../../Frontend/views/home', {cookieStatus : "Cookie has been cleared successfully.", color: "green"}); 

});



module.exports = router; 

