const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("Mongodb is Connected");
})

connection.on("error", (error) => {
    console.log("Error is Mongodb connection", error);
})

module.exports = mongoose;