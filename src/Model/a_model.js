const { default: mongoose } = require("mongoose");

const a_Schema = mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    })

const a = mongoose.model("A",a_Schema)
module.exports = a