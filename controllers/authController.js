const db = require('../config/user');
const bcrypt = require('bcrypt');

exports.signup = (req,res)=>{
        res.render('signup');
};

exports.login = (req,res)=>{
    res.render('login');
};

exports.registerUser = async (req,res)=>{
    const {fullname, mobile, email, password, confirmPassword} = req.body;

    if(password !== confirmPassword){
        return res.send("Password do not match");
    }
    

    try{
        const [existingUser] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);
        if(existingUser.length){
            return res.send("User already exists No need to register");
        }
        const salt = 10;
        const data = password
        const hashpassword =  await bcrypt.hash(data, salt);

        await db.promise().query(
            'INSERT INTO users (fullname, mobile, email, password) VALUES (?, ?, ?, ?)',
            [fullname, mobile, email, hashpassword]    
        );
        
        console.log("User added");
        res.redirect('login');
    }
    catch(err){
        console.log("Error during registration", err);
        res.send("Error register user");
    }

};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const [users] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);
        if (!users.length) {
            return res.send('User not found');
        }

        const user = users[0];

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            req.session.user = users[0];
            return res.render('dashboard');
        }

        res.send("Invalid Credentials");
    } catch (error) {
        console.error('Error during login:', error);
        res.send('Error logging in');
    }
};


