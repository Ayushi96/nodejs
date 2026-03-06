// Core Module
const express = require("express");
const homeControllers = require("../controllers/hostController");
// create a new router
const hostRouter = express.Router();



hostRouter.post("/add-home", homeControllers.postAddHome);

hostRouter.get("/add-home", homeControllers.getAddHome);

hostRouter.get("/host-home-list", homeControllers.getHostHomeLists)

hostRouter.get("/edit-home", homeControllers.editHome)

exports.hostRouter = hostRouter;

