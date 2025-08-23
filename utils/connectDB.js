require("dotenv").config();
const connectionURI = process.env.MONGO_URI;
const mongoose = require("mongoose");
async function connectDB() {
  const connection = await mongoose.connect(connectionURI, {});
  console.log("mongo db connected");
  return connection;
}
module.exports = connectDB;
