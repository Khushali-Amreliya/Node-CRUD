// const { default: mongoose } = require("mongoose")
const mongoose = require("mongoose")

const connectDB = () => {
    mongoose.connect("mongodb+srv://amreliyakhushali:hi9EvLK2doXPya2a@cluster0.muzbcpc.mongodb.net/").then((data) => {
        if(data){
            console.log("Database connected");
        }
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = connectDB