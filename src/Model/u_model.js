const { default: mongoose } = require("mongoose");

const u_Schema = mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    })

const u = mongoose.model("U",u_Schema)
module.exports = u