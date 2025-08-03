// INTRODUCTION TO NODE JS

/*
* Simplifies server creation by providing fundamental web app features.
Initially with just Node.js we have to handle all the parts of request 
mapping and authentication and everything at one place. 
So request handler is overloaded with lots of things. 
Routing management

With express we have middlewares, we can segregate tasks.
Tuh aise kar k ek chain bana lenge of middlewears. 
Phle maybe login wale middleware k pas bhejenge, then next. 

Middleware makes code modular and maintainable.

API Development: easy and efficient. 

Communnity & Plugins: numerous. 
*/

// ------------ MIDDLEWARE -----------------

/**
 * Say humare pas request aai, tuh 1st middleware k pas aegi, usme 2 params rahenge ab.
 * ek extra next name ka param rahega, so basically kisi middleware k level pe we can see
 * ki arey user to logged in hi nahi hai, so yahi se request reject kar do rather than next
 * middleware pe jane do, and you can do that res.end()
 * But agar say user logged in hai tuh aap ye next() function call kar skte hain, and then request
 * next middleware k pas chali jaegi.
 *
 * NOTE: Middleware ka jo order hai wo bhi important hai. So in handlers ka sequence maintain karna padta hai.
 * Like first aap authenticate karenge then authorization check karenge then hi transaciton allow
 * karenge.
 *
 * So to add a middleware we have a function by the name 'use'
 *
 */

// get http core module in variable http
const http = require("http");
const express = require("express");

// creates an app for you
/** This app will be of the same type as the requestHandler, i.e it will take req and resp.
 * so you can pass that in http.createServer(app)
 * Without any further handling, express will add 404 Not Found functionality.
 * else the loader would have just kept on spinning.
 */
const app = express();

// add a middleware

app.use("/", (req, res, next) => {
  console.log("1st Middleware ", req.url, req.method);
  // if we dont call next() then the request will not go to the next middleware
  next();
});

// Second middleware that is executed on all paths : /
app.use("/", (req, res, next) => {
  console.log("Came in the second middleware ", req.url, req.method);
  // instead of res.write() we are doing send()
  /* once you have sent the response, you can
   * not send another response.This is because
   * send implicitly calls res.end()
   * => we don't need to explicitly end() the response
   */
  res.send("<p>Welcome to Express JS</p>");
  //  send() wil set the content-type on its own

  next();
});

/**
 * For request handling that was initially being done using requestHandler,
 * we will be using the 'use' function only but we will be passing the path
 * as the initial argument.
 *
 */

app.use("/submit-details", (req, res, next) => {
  console.log("in submit-detials");
  // can't do the below if the previous middleware has already sent a response.
  // res.send("second response");
});

/**
 * Now for handling requests based on methods i.e GET , POST, etc.
 * we can directly use the method name instead of 'use'
 */
app.get("/some-url", (req, res, next) => {
  console.log("handling a GET request ");
});

// const requestListener = require("./user");

// create a server: NOT NEEDED ANYMORE
// const server = http.createServer(app);
// you can directly start listening on app

const PORT = 3000;

// NOT NEEDED
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/`);
});
