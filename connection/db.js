const mongoose = require('mongoose');
require("dotenv").config;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err.message}`);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = connectDB;
