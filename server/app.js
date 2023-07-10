var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createUserRouter = require('./routes/createUser');
var loginUser = require('./routes/loginUser');
const attractionsRouter = require('./routes/attractions');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/createUser', createUserRouter);
app.use('/login', loginUser);
app.use('/attractions', attractionsRouter);
app.use('/attractions/featured', attractionsRouter);





























module.exports = app;
