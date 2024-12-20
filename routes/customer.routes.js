const express = require('express');
const orderController = require('../controller/customer.controller');

const router = express.Router();

// Route to get aggregated customer spending
router.post('/add', orderController.addOrder);
router.get('/customer-spending', orderController.getCustomerSpending);

module.exports = router;
