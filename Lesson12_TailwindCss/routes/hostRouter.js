// Core Module
const path = require("path");
const express = require("express");
// create a new router
const hostRouter = express.Router();

hostRouter.post("/add-home", (req, res, next) => {
  console.log("request body: ", req.body);
  // res.send(`<h1> Succesfully registered home!</h1>
  //   <a href="/">Go Home</a>`);
  res.sendFile(path.join(__dirname, "../", "views", "home-added-successfully.html"));
});

hostRouter.get("/add-home", (req, res, next) => {
  // res.send(`<h1>Register your home here: </h1>
  //       <form action="/host/add-home" method="POST">
  //       <input type="text" name="houseName" placeholder="Enter the name of your house" />
  //       <input type="submit" />`);
  res.sendFile(path.join(__dirname, "../", "views", "add-home.html"));
});

module.exports = hostRouter;
