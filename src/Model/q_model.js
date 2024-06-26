const { default: mongoose } = require("mongoose");

const q_Schema = mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    })

const q = mongoose.model("Q",q_Schema)
module.exports = q