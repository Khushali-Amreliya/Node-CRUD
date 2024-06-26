const { default: mongoose } = require("mongoose");

const o_Schema = mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    })

const o = mongoose.model("O",o_Schema)
module.exports = o