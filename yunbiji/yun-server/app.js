var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dbConnect = require('./database/config');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var app = express();

// session
app.use(session({
    name: 'sid',
    secret: 'dyyao',
    resave: false, //是否重新保存session
    saveUninitialized: false,  //保存初始化
    cookie: { secure: false,expires: 1000*60*60*24*14 }, //是否是https协议
    store: new MongoStore({ mongooseConnection: dbConnect })
}))

var index = require('./yunRoutes/index');
app.use('/', index);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
