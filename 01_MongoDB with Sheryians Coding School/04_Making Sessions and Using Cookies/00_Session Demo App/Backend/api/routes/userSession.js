const express = require('express');
const router = express.Router();



router.get('/banned', (req, res) => {
    
    req.session.banned = true;                           // Once a session is made, then you can check it in any route that you want 

    // But once the server gets restarted, the session gets deleted 

    res.render('../../../../Frontend/views/banned');
    
});


router.get('/help', (req, res) => {

    res.render('../../../../Frontend/views/help'); 

});


router.get('/checkBan', (req, res) => {
    
    if(req.session.banned === true){
        res.render('../../../../Frontend/views/checkBan', {banStatus: "You're banned from our website", color: "yellow"}); 
    }
    else{
        res.render('../../../../Frontend/views/checkBan', {banStatus: "You're not banned from our website", color: "blue"});
    }

});


router.get('/removeBan', (req, res) => {

    console.log(req.session);
    
    req.session.banned = false; 
    res.render('../../../../Frontend/views/banRemoved'); 
    
    /*

    You can also call .destroy() function of session to delete a value's exsistance in session 

    req.session.destroy( (err) => {
        if(err) throw err;
    });
    
    res.send('../../../../Frontend/views/banRemoved');

    */

    console.log(req.session);

});



module.exports = router; 


// This is just a example of session, this is not the correct way of applying banning functionality most probably because if the server restarts, the session will be closed and the data of banned people will be lost 

// Most probably the database schema should have a banned attribute 