const express = require('express'); 
const router = express.Router();

const userModel = require('../../db/models/userModel'); 


router.get('/createUser/:name/:age/:username', async (req, res) => {

    // we have to use async-await keywords with the function in which we're creating user, because creating document in a collection is a asyncronous work 

    // Everything which will be written with respect to userModel will be asynchronous 

    const createdUser = await userModel.create({
        username: req.params.username,
        age: req.params.age,
        name: req.params.name
    });

    res.send(createdUser); 

});


module.exports = router;