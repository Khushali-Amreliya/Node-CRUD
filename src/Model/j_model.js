const { default: mongoose } = require("mongoose");

const j_Schema = mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    })

const j = mongoose.model("J",j_Schema)
module.exports = j