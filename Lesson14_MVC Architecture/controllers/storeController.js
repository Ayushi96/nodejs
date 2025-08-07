

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {activeRoute: "bookings"} )
}

exports.getFavoriteList = (req, res, next) => {
  res.render("store/favorite-list", {activeRoute: "favorite-list"})
}

exports.getHomeDetails = (req, res, next) => {
  res.render("store/home-details", {activeRoute: "home-details"})
}

exports.reserve = (req, res, next) => {
  res.render("store/reserve", {activeRoute: "reserve"})
}