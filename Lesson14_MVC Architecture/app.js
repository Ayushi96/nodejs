// Core Modules
const path = require("path");

const express = require("express");
const { hostRouter } = require("./routes/hostRouter");
const storeRouter = require("./routes/storeRouter");
const errorsController = require("./controllers/errors");
// Root path
const rootDir = require("./utils/pathUtil");

const PORT = 3000;
const app = express();

// you need to set to use embedded js
app.set("view engine", "ejs");
// jo engine use karna hai usk views kis path pe hain
app.set("views", "views");

app.use(express.urlencoded());

app.use("/host", hostRouter);

//router for the person renting airbnb
app.use(storeRouter);

// add a middleware to serve static files
app.use(express.static(path.join(rootDir, "public")));

// NOTE: this is the last middleware ( which is important for functionality.)
app.use(errorsController.handle404);

app.listen(PORT, () => {
  console.log(`Server started on Port: ${PORT}`);
});
