const express = require("express");
const connectDB = require("./db/dbconnection");
const router = require("./Routes/v1");

const app = express()

const PORT = 9090
app.listen(PORT,
    () => {
        console.log("Running Successfully",PORT);
})
connectDB()
app.use(express.json())
app.use("/v1" , router)