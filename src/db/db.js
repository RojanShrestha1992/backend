const mongoose = require("mongoose");

async function connectDB(){
    await mongoose.connect("mongodb+srv://yt:v8MrxHO1fMSICwzA@backend-learn.awnszuj.mongodb.net/halley")

    console.log("connected to db")
}


module.exports = connectDB
