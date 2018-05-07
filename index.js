// to server over http
const http = require('http');

// express is going to be the Library that helps us create the APIs
const express = require('express');
const server = express();
// so we can parse json
const bodyParser = require('body-parser');
// so we can log 
const morgan = require('morgan');
// to use the paths needed
var path = require('path');

// used for the routing of the server
var router = require('./App/router.js').router;

// for auth reasons
// var session = require('express-session');
// var passport = require('./App/router.js').passport;
// var flash = require('connect-flash');

// PORT for the app and local host
var PORT = process.env.PORT || 8080;

// server.use(session({ secret: 'keyboard cat', cookie: { maxAge: 3600000 }, resave: true, saveUninitialized: true }));
// server.use(passport.initialize());
// server.use(passport.session());
// server.use(flash());

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.set('views', path.join(__dirname, '/webpage/views'));
server.set('view engine', 'pug');
server.use(morgan("short"));
server.use(router);

var httpServer = http.createServer(server);
httpServer.listen(PORT,() => {
    console.log("server running");
});

