const express =require('express');

const Signup = require('../models/signup.model');

const router = express.Router();
//Save New User
router.post('/signup/add',(req,res)=>{
    let newUser = new Signup(req.body);
    newUser.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Sign Up Correctly"
        });
    });
});
module.exports = router;