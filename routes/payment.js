const express = require('express');
const ROUTE = express.Router();

const payment = require('../controller/payment');


ROUTE.post('/create-order',payment.createOrder);
ROUTE.post('/create-customer',payment.createCustomer);
ROUTE.put('/edit-customer-info',payment.editCustomer);
ROUTE.get('/get-customer-detail',payment.getCustomer);
ROUTE.get('/get-particular-payment',payment.getPaymentOnId);
ROUTE.get('all-orders',payment.getAllOrders);
ROUTE.get('get-all-payment',payment.getAllPaymentList);


module.exports = ROUTE;
