const { default: mongoose } = require("mongoose");

const food_Schema = mongoose.Schema(
    {
        food_name:{
            type:String,
            trim:true
        },
        food_item:{
            type:Number,
            trim:true,
            default:0
        }
    },
    {
        timestamps:true
    })

const food = mongoose.model("Food",food_Schema)
module.exports = food