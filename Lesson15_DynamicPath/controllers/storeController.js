const Home = require("../models/home-model");

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", { activeRoute: "bookings" });
};

exports.getHomeList = (req, res, next) => {
  console.log("home list url ", req.url);
  Home.fetchAll((homes) => {
    res.render("store/home-list", {
      registeredHomes: homes,
      pageTitle: "Our Homes List",
      activeRoute: req.url,
    });
  });
};

exports.getFavoriteList = (req, res, next) => {
  res.render("store/favorite-list", { activeRoute: "favorite-list" });
};

exports.getHomeDetails = (req, res, next) => {
  res.render("store/home-details", { activeRoute: "home-details" });
};

exports.reserve = (req, res, next) => {
  res.render("store/reserve", { activeRoute: "reserve" });
};
