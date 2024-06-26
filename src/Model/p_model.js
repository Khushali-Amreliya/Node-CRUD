const { default: mongoose } = require("mongoose");

const p_Schema = mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    })

const p = mongoose.model("P",p_Schema)
module.exports = p