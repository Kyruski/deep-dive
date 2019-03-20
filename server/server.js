const createError = require("http-errors");
const logger = require("morgan");
const express = require("express");
const app = express();
const db = require("../db/index.js");

// open up CORS
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(logger("dev"));

// Server Routes
const { candidates, policies, voter } = require("./routes");
app.use("/api/candidates", candidates);
app.use("/api/policies", policies);
app.use("/api/voter", voter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
