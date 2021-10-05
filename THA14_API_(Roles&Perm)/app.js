//requires
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var bodyParser = require('body-parser')
//redis and mongo
//const {redisClient,  session, RedisStore}  =require('./database/redis');
require('./database/mongo');
//routes
require("./middlewares/passport")(passport);
var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var passportRouter = require('./routes/passport_jwt');
//app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());


app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/passport', passportRouter);


// app.use(session({
//   store: new RedisStore({client: redisClient,ttl: 86400}),
//   secret: "password",
//   saveUninitialized: false,
//   resave: false,
//   cookie:{
//     secure: false,
//     httpOnly: false,
//     maxAge: 1000*60*10
//   }
// }));



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