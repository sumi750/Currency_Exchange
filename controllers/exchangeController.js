const axios = require('axios');
const db = require('../config/user');
require('dotenv').config();


//getExchagnge Rate function
const getExchangeRate = async (from, to) => {
  const response = await axios.get(`${process.env.EXCHANGE_API_URL}${from}`);
  return response.data.rates[to];
};



exports.dashBoard = (req,res)=>{
  res.render('dashBoard');
}

// Handle Exchange Request
exports.createExchangeRequest = async (req, res) => {
  const {from, to, amount } = req.body;
  try {
    const rate = await getExchangeRate(from, to);
    const convertedAmount = (amount * rate).toFixed(2);

    db.query(`INSERT INTO exchange_requests (from_currency, to_currency, amount, converted_amount, exchange_rate) VALUES (?, ?, ?, ?, ?)`,
      [from, to, amount, convertedAmount, rate],
      (err) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        // res.json({ message: 'Exchange request submitted', rate, convertedAmount });
        console.log("Request Done");
        // req.flash("Exchange request Submitted");
        res.redirect('dashBoard');
      }
    );
  } catch (error) {
    res.status(500).json({ error: 'Error creating exchange request' });
  }
};
