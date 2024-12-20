const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: {
    type: Number,
    required: true,
    unique: true,
  },
  customer: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['completed', 'pending'],
    required: true,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
