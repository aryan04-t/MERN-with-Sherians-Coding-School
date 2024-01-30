const express = require('express');
const router = express.Router();

const userModel = require('../../db/models/userModel');


router.get('/fetchAllUsers', async (req, res) => {

    const allUser = await userModel.find();
    
    res.send(allUser);

});


module.exports = router; 