const express = require('express'); 
const router = express.Router(); 

const userModel = require('../../db/models/userModel');


router.get('/findUser/:name', async (req, res) => {

    const userFound = await userModel.findOne({name: `${req.params.name}`});

    res.send(userFound); 

}); 


module.exports = router;