const orderService = require('../services/customer.services');

// Controller function to add a new order
const addOrder = async (req, res) => {
    try {
      const orderData = req.body; // Retrieve order data from the request body
      const newOrder = await orderService.addOrder(orderData);
      res.status(201).json({
        success: true,
        message: 'Order added successfully',
        data: newOrder,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  };

// Controller function to respond with aggregated data
const getCustomerSpending = async (req, res) => {
  try {
    const data = await orderService.getCustomerSpending();
    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
    addOrder,
  getCustomerSpending,
};
