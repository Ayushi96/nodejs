// Core Modules
const path = require("path");

const express = require("express");
const hostRouter = require("./routes/hostRouter");
const userRouter = require("./routes/userRouter");
// Root path 
const rootDir = require("./utils/pathUtil");

const PORT = 3000;
const app = express();

// Jo bhi request aegi usko parse kar dena,
// request ki body ko req.body me daal dena
app.use(express.urlencoded());

// router for the person hosting airbnb property
/* We have decided that all the host paths will be /host/... something hence
 * we can add the /host here itself and in the hostRouter.js all the paths will have only the
 * following path. This removes redundancy, bar bar you dont have to type /host in all urls of hostRouter.
 */
app.use("/host", hostRouter);

//router for the person renting airbnb
app.use(userRouter);

/**
 * One way to handle all the user request is move these
 * functions in another file inside routes folder.
 *
 * In that scenario we will import those routes and add the get
 * functionality on the imported router.
 */
// app.get("/", (req, res, next) => {
//   console.log(req.url, req.method);
//   res.send(`<h1> Welcome to airbnb </h1>
//         <a href="/host/add-home"> Add Home</a>`); // app.get() will make sure that
//   // any other path shows 404
// });

/**
 * One way to handle all the host request is move these
 * functions in another file (hostRouter.js) inside routes folder.
 *
 * In that scenario we will import those routes and add the get
 * functionality on the imported router.
 */
// to make all the paths used by host similar we can prepend it with /host/
// app.get("/host/add-home", (req, res, next) => {
//   res.send(`<h1>Register your home here: </h1>
//         <form action="/host/add-home" method="POST">
//         <input type="text" name="houseName" placeholder="Enter the name of your house" />
//         <input type="submit" />`);
// });

// handle submission of /host/add-home form
// to make all the paths used by host similar we can prepend it with /host/
// app.post("/host/add-home", (req, res, next) => {
//   console.log("request body: ", req.body);
//   res.send(`<h1> Succesfully registered home!</h1>
//     <a href="/">Go Home</a>`);
// });

// ------------ Handling 404 ----------------------
/**
 * Now 404 is right now being handled by express only.
 * But in Case you want to handle that on your own and add
 * some fancy 404 page, which is also user friendly.
 */
// NOTE: this is the last middleware ( which is important for functionality.)
app.use((req, res, next) => {
  // now the status will also be 404, although the user will still see the same thing if you
  // dont add this status. Advantage: if this page is reached on by the code then your response
  // code should be correct and indicative of the actual scenario.
  //   res.status(404).send("<h1> 404 Your page is not found on airbnb </h1>");
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on Port: ${PORT}`);
});
