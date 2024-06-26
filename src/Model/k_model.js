const { default: mongoose } = require("mongoose");

const k_Schema = mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    })

const k = mongoose.model("K",k_Schema)
module.exports = k