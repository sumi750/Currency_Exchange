const express = require('express');
const { convertCurrency, createExchangeRequest, dashBoard } = require('../controllers/exchangeController');
const router = express.Router();

//Render for dashboard page
router.get('/dashboard', dashBoard);

//Handle for createExchange Request
router.post('/dashboard', createExchangeRequest);

module.exports = router;