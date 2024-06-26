const { default: mongoose } = require("mongoose");

const f_Schema = mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    })

const f = mongoose.model("F",f_Schema)
module.exports = f