const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        required:true
    },
    collegeName:{
        type:String,
        required: true,
    },
    courseName:{
        type:String,
        required:true
    },
    Password:{
        type: String,
        required: true
    },
    joiningDate:{
        type:Date,
        default : Date.now()
    }
});

const UserModel = mongoose.model("UserModel",UserSchema);

module.exports = UserModel;