const { default: mongoose } = require("mongoose");

const g_Schema = mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    })

const g = mongoose.model("G",g_Schema)
module.exports = g