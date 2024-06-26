const { default: mongoose } = require("mongoose");

const h_Schema = mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    })

const h = mongoose.model("H",h_Schema)
module.exports = h