const mysql = require("mysql2");
require('dotenv').config();

const db = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '$umit@141012',
    database: 'currency_portal'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL successfully!');
});

module.exports = db;