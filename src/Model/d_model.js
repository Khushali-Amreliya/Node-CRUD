const { default: mongoose } = require("mongoose");

const d_Schema = mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    })

const d = mongoose.model("D",d_Schema)
module.exports = d