const mongoose = require("mongoose");
require("dotenv").config();
// const mongodb_url = process.env.mongodb_url_local;
const mongodb_url = process.env.mongodb_url_atlas;
const connectdb = async () => {
  try {
    await mongoose.connect(mongodb_url);
    console.log("db connected..");
  } catch (error) {
    console.log("db not connected", error.message);
  }
};
connectdb();
module.exports = connectdb;
