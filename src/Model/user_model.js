const mongoose = require("mongoose");

const user_Schema = mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        },
        email:{
            type:String,
            trim:true
        }
    },
    {   
        timestamps:true
    })
    
const user = mongoose.model("User",user_Schema)
module.exports = user