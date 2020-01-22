const express = require("express");
const Router = express.Router();
const UserModel = require("../models/User"); 
const bcrypt = require("bcryptjs");

Router.post('/Signup',(req,res) => {
    console.log(req.body);
const  {Name, phoneNumber, email, date, collegeName, courseName, Password} = req.body;
UserModel.findOne({email : req.body.email})
.then(User =>{
    if(User){
        console.log(`User Already Exists`);
    }
    else{
        const registeruser= new UserModel({
            Name,
            phoneNumber,
            email,
            date,
            collegeName,
            courseName,
            Password
        });
        console.log(registeruser);
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(registeruser.Password, salt, (err,hash)=>{
                if (err) console.log(err);
                registeruser.Password = hash;
                registeruser.save()
                .then(UserModel => console.log(`Registered User As ${registeruser}`))
                .catch(err => console.log(err));
            });
        });
    }
});
});

module.exports = Router;