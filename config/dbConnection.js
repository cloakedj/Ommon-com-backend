const mongoose = require("mongoose");

const uri="mongodb+srv://kanwardhananjay:1999101275D@cluster0-qinrs.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(uri,{useNewUrlParser: true,useUnifiedTopology:true})
.then(() => console.log("Connection To Mongoose Is Successful"))
.catch((err) => console.log("Something Went Wrong",err))