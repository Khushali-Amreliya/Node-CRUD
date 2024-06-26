const { default: mongoose } = require("mongoose");

const s_Schema = mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    })

const s = mongoose.model("S",s_Schema)
module.exports = s