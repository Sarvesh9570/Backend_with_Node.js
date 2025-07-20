const express = require("express");
const connectdb = require("./db");
const bodyparser = require("body-parser");
const path = require('path');
const passport = require("./auth");
const app = express();
require("dotenv").config();
const port = process.env.port_no || 2000;
app.use(bodyparser.json()); // http request se jo data aayega usko object m kr dega abhi humlog
// json m bhejenge data isiliye bodyparser.json() kiye hai.

// middleware for authentication
// app.use(passport.initialize());
// const localAuthmiddleware = passport.authenticate("local", { session: false });

// middleware for logging
const logRequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] Request Made to: ${req.originalUrl}`
  );
  next();
};
app.use(logRequest); // sb me use hoga middleware all request
//if i want to use this middleWare only person router then
// app.use("/person",logRequest, personRoutes);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'index.html'));
});

// person routes
const personRoutes = require("./routes/PersonRoutes");
app.use("/persons", personRoutes);

//menu routes
const MenuRoutes = require("./routes/MenuRoutes");
app.use("/menu", MenuRoutes);

app.listen(port, () => {
  console.log("listen..", port);
});
