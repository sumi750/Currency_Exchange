const express = require('express');
const app = express();
const port = 4040;
const session = require('express-session');
const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const exchangeRoutes = require('./routes/exchange');
require('dotenv').config();


//set up middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride("_method"));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false, 
}));


app.use('/', authRoutes);
app.use('/', exchangeRoutes);

app.listen(port, (req,res)=>{
    console.log(`app is listing on port ${port}`);
})