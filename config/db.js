const mongoose = require("mongoose");
const config = require("config");
const mongoConnectionString = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(mongoConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB Connected.....");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
