const mongoose = require("mongoose");

const v_Schema = mongoose.Schema(
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
    
const v = mongoose.model("V",v_Schema)
module.exports = v