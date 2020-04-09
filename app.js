var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var app = express();
const passport = require("passport");
const passportSetup = require("./config/passport-setup");
var cors = require("cors");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
app.use(cors());

// Auth Router
app.use("/oauth", require("./Controller/Outh"));

// Routes
app.use("/user", require("./Controller/User"));
app.use("/address", require("./Controller/Address"));
app.use("/product", require("./Controller/Product"));
app.use("/conprd", require("./Controller/ConnectProduct"));
app.use("/join", require("./Controller/Join"));
app.use("/company", require("./Controller/Company"));

//Heroku Config
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

module.exports = app;
