const express = require('express');
require("dotenv").config();
const app = express();

const connectDB = require('./connection/db');
const orderRoutes = require('./routes/customer.routes');

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use('/api/orders', orderRoutes);

// Start the server

app.listen(process.env.PORT,(err)=>{
   err ?console.log(`Something went wrong ${err}`) :console.log(`Server is running on port ${process.env.PORT}`);
});
