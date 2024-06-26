const { default: mongoose } = require("mongoose");

const n_Schema = mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    })

const n = mongoose.model("N",n_Schema)
module.exports = n