const User = require("../models/user");
const { validationResult } = require("express-validator");

const addUser = async(req,res) => { 

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(401).json({errors:errors.array()})
    }

    try {
        const {name,email,username} = req.body

        // check if user exist with email 
        const checkUserEmail = await User.findOne({email})
        if(checkUserEmail){
            return res.status(400).json({error:"User already exist"})
        }

         // check if user exist with username
        const checkUserName = await User.findOne({username})
        if(checkUserName){
            return res.status(400).json({error:"Username exist"})
        }

        // create user in db 
        const newUser = new User({
            name,email,username
        });

        await newUser.save();
        res.status(201).json({msg:"User saved successfully"});

    } catch (error) {
        res.json({error});
    }
}

const getUser = async(req,res)=>{
    try {
        const username = req.params.username
        
        // find user in db by username
        const user = await User.findOne({username})
        if(!user){
            return res.status(400).json({err:"user doesn't exist"})
        }
        res.status(200).json(user)
    } catch (error) {
        res.json({error});
    }
}

module.exports= {addUser,getUser}