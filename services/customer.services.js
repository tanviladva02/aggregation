const Order = require('../model/customer.model');

// Service to add a new order
const addOrder = async (orderData) => {
    try {
      const order = new Order(orderData);
      await order.save(); // Save the order in the database
      return order;
    } catch (err) {
      throw new Error(`Error adding order: ${err.message}`);
    }
  };

// Service to calculate total amount spent by each customer for completed orders
const getCustomerSpending = async () => {
  try {
    const result = await Order.aggregate([
    //   { $match: { status: 'completed' } }, // Filter completed orders
      { $group: { _id: '$customer', totalAmount: { $sum: '$amount' } } } // Group by customer and sum amounts
    ]);
    return result;
  } catch (err) {
    throw new Error(`Error in aggregation: ${err.message}`);
  }
};

module.exports = {
    addOrder,
    getCustomerSpending,
};
