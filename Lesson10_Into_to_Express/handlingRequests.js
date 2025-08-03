const express = require("express");

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`);
});

app.use("/", (req, res, next) => {
  console.log("1st MIDDLEWARE");
  next();
});

/**
 * specifically handle get requests we can use
 * app.get instead of app.use
 *
 * NOTE: the app.get method does specific matching of the path
 * provided as the 1st argument. In case of app.use
 * '/' will match all the paths, but with get, this will match
 * strictly '/' path.
 */
app.get("/", (req, res, next) => {
  console.log("2nd MIDDLEWARE");
  res.send("<h1>Welcome to 2nd Middleware</h1>");
});

/**
 * to map to POST requests.
 */
app.post("/submit-details", (req, res, next) => {
  console.log("in the POST middleware ");
  res.send("<h1>POST request handled</h1>");
});
