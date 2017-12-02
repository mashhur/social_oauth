const express = require('express');
const bodyParser = require('body-parser');

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var passport = require('passport');
var cookieParser = require('cookie-parser');

// Bring in defined Passport Strategy
require('./server/config/passport')(passport);

var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/server/config/config.json')[env];

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(passport.initialize());
app.use(cookieParser());

// routes
var index = require('./server/routes/index');
var auth = require('./server/routes/auth');
app.use('/', index);
app.use('/auth', auth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  return;
});


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

var port = normalizePort(process.env.PORT || '4004');
app.set('port', port);

// start the server
app.listen(port, () => {
  console.log('Server is running on http://localhost:4004 or http://127.0.0.1:4004');
});

