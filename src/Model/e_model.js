const { default: mongoose } = require("mongoose");

const e_Schema = mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    })

const e = mongoose.model("E",e_Schema)
module.exports = e