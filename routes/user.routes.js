const express =require('express');

const Signup = require('../models/signup.model');

const router = express.Router();
//Save New User
router.post('/user/signup',(req,res)=>{
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
//GET POST
router.get('/all',(req,res)=>{
    Signup.find().exec((err,status)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingsUsers: status
        });
    });
});
//Update User
router.put('/user/update/:id',(req,res)=>{
    Signup.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,status)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"Updated User"
            });
        }
    );
});
module.exports = router;