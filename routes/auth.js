const express = require('express');
const router = express.Router();
const { signup, login, registerUser, loginUser } = require('../controllers/authController');

//render signup and login pages
router.get('/signup', signup);
router.get('/login', login);

//handle form submission
router.post('/signup', registerUser);
router.post('/login', loginUser);

module.exports = router;