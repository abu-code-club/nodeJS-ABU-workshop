const express = require('express');
const server = express();
var bodyParser = require("body-parser");
const morgan = require('morgan');
var path = require('path');
// const router = require('./routes/user.js');
const PORT = process.env.PORT || 8080;

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// server.use(express.static('webpage/Helpers'));
server.set('views', path.join(__dirname, '/webpage/views'));
server.set('view engine', 'pug')

server.use(morgan("short"));
// server.use(router)


server.get('/', (req, res) => {
    res.render('home')
})

server.get('/login', (req,res) => {

    res.render('login',{login:'Login'})
})

server.get('/signup', (req,res) => {
    res.render('signup')
})

server.post('/Add-User', (req,res) => {
    res.render('login',{login:'Welcome New User you can Login now'})
})

server.listen(PORT,() => {
    console.log("server running");
});

