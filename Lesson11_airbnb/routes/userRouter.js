// Core Modules
const path = require("path");

const express = require("express");
// create a new router
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  // res.send(`<h1> Welcome to airbnb </h1>
  //       <a href="/host/add-home"> Add Home</a>`);
  // you can directly send the page
  // __dirname --> current folder
  // you need to use path so that it works for all OS
  res.sendFile(path.join(__dirname, "../", "views", "home.html"));
});

module.exports = userRouter;
