// Core Module
const express = require("express");
// create a new router
const hostRouter = express.Router();

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  registeredHomes.push(req.body);

  res.sendFile;
  // path.join(__dirname, "../", "views", "home-added-successfully.html")
  console.log("active route is ", req.url);
  res.render("home-added-successfully", {
    pageTitle: "Successfully registered home!",
    activeRoute: req.url,
  });
});

hostRouter.get("/add-home", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "views", "add-home.html"));
  console.log("active route is ", req.url);
  res.render("add-home", { activeRoute: req.url });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
