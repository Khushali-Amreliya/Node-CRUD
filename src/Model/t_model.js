const { default: mongoose } = require("mongoose");

const t_Schema = mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    })

const t = mongoose.model("T",t_Schema)
module.exports = t