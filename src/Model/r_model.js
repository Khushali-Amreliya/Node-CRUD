const { default: mongoose } = require("mongoose");

const r_Schema = mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    })

const r = mongoose.model("R",r_Schema)
module.exports = r