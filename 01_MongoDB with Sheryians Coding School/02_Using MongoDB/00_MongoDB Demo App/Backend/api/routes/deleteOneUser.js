const express = require('express');
const router = express.Router();

const userModel = require('../../db/models/userModel');


router.get('/deleteOneUser/:name', async (req, res) => {
    
    let deletedUser = await userModel.findOneAndDelete({
        name: `${req.params.name}`
    });

    res.send(deletedUser);
    
});

module.exports = router;