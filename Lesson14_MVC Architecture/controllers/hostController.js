// This file will contain the logic to send the model data to view

const Home = require("../models/home-model");
exports.getAddHome = (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "views", "add-home.html"));
  res.render("host/add-home", { activeRoute: req.url });
};

exports.postAddHome = (req, res, next) => {
  /**
   * Right now we are saving whatever the user sends as the request body in the registeredHomes array. But ideally we should we verifying this data, and then saving it in our database.
   *
   */
  // registeredHomes.push(req.body);

  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();
  res.render("host/home-added-successfully", {
    pageTitle: "Successfully registered home!",
    activeRoute: req.url,
  });
};

exports.getHomes = (req, res, next) => {
  console.log("active route is ", req.url);

  Home.fetchAll((homes) => {
    res.render("store/home-list", {
      registeredHomes: homes,
      pageTitle: "Our Registered Homes",
      activeRoute: req.url,
    });
  });
};

exports.getIndex = (req, res, next) => {
  console.log("active route is ", req.url);

  Home.fetchAll((homes) => {
    res.render("store/home-list", {
      registeredHomes: homes,
      pageTitle: "Welcome to airbnb",
      activeRoute: req.url,
    });
  });
};

// Make sure to use ejs format files for views
exports.getHostHomeLists = (req, res, next) => {
  Home.fetchAll((homes) => {
    res.render("host/host-home-list", {
      registeredHomes: homes,
      pageTitle: "Host Home List",
      activeRoute: req.url,
    });
  });
}

exports.editHome = (req, res, next) => {
  res.render("host/edit-home", {activeRoute: "edit-home"})
}


