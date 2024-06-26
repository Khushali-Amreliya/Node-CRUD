const { default: mongoose } = require("mongoose");

const b_Schema = mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    })

const b = mongoose.model("B",b_Schema)
module.exports = b