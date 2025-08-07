const express = require("express");
// create a new router
const storeRouter = express.Router();
const homesController = require("../controllers/hostController");
const storeController = require("../controllers/storeController");

storeRouter.get("/", homesController.getIndex);

storeRouter.get("/host/bookings", storeController.getBookings);
storeRouter.get("/host/favorite-list", storeController.getFavoriteList);
storeRouter.get("/host/home-details", storeController.getHomeDetails);
storeRouter.get("/host/reserve", storeController.reserve);

module.exports = storeRouter;
