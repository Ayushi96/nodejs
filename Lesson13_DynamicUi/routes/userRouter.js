// Core Modules
const path = require("path");

const express = require("express");
// create a new router
const userRouter = express.Router();
const { registeredHomes } = require("./hostRouter");

userRouter.get("/", (req, res, next) => {
  console.log("user router: registered home is ", registeredHomes);
  console.log('active route is ', req.url)
  // res.sendFile(path.join(__dirname, "../", "views", "home.html"));
  // now we will render the response along with the variable that you want to pass to ejs :
  //  name of template then the variable that you want to send
  res.render("home", {
    registeredHomes: registeredHomes,
    pageTitle: "Our Registered Homes",
    activeRoute: req.url
  });
});

module.exports = userRouter;
