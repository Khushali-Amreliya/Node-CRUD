const { default: mongoose } = require("mongoose");

const c_Schema = mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    })

const c = mongoose.model("C",c_Schema)
module.exports = c