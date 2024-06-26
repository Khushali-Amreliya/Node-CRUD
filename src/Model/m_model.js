const { default: mongoose } = require("mongoose");

const m_Schema = mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    })

const m = mongoose.model("M",m_Schema)
module.exports = m