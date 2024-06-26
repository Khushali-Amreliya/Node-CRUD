const mongoose = require("mongoose");

const w_Schema = mongoose.Schema(
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
    
const w = mongoose.model("W",w_Schema)
module.exports = w