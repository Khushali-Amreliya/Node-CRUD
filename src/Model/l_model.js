const { default: mongoose } = require("mongoose");

const l_Schema = mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    })

const l = mongoose.model("L",l_Schema)
module.exports = l