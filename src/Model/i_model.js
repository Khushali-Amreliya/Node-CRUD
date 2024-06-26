const { default: mongoose } = require("mongoose");

const i_Schema = mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    })

const i = mongoose.model("I",i_Schema)
module.exports = i