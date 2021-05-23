var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");
var testAPI2 = require("./routes/testAPI2");
var testAPI3 = require("./routes/testAPI3");
var testAPI4 = require("./routes/testAPI4");
var demo = require("./routes/demo");
var demo_add = require("./routes/demo_add");
var demo_c = require("./routes/demo_c");
var demo_d = require("./routes/demo_d");
var demo_f = require("./routes/demo_f");
var demo1 = require("./routes/demo1");
var demo2 = require("./routes/demo2");
var croot = require("./routes/croot");
var duser = require("./routes/duser");
var history = require("./routes/history");
var root = require("./routes/root");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);
app.use("/second", testAPI2);
app.use("/api3", testAPI3);
app.use("/api4", testAPI4);
app.use("/demo", demo);
app.use("/demo_add", demo_add);
app.use("/demo_c", demo_c);
app.use("/demo_d", demo_d);
app.use("/demo_f", demo_f);
app.use("/demo1", demo1);
app.use("/demo2", demo2);
app.use("/croot", croot);
app.use("/duser", duser);
app.use("/history", history);
app.use("/root", root);

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
