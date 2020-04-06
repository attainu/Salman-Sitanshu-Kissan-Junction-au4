var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);

// Routes
app.use('/user', require('./Controller/User'));
app.use('/address', require('./Controller/Address'));
app.use('/order', require('./Controller/Order'));
app.use('/sold', require('./Controller/Sold'));
app.use('/product', require('./Controller/Product'));
app.use('/conprd', require('./Controller/ConnectProduct'));
app.use('/join', require('./Controller/Join'));

//Heroku Config
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

module.exports = app;
