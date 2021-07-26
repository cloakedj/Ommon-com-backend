const mongoose = require("mongoose");

const uri=//Mongo URI
mongoose.connect(uri,{useNewUrlParser: true,useUnifiedTopology:true,dbName://DBName
})
.then(() => console.log("Connection To Mongoose Is Successful"))
.catch((err) => console.log("Something Went Wrong",err))
