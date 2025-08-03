const express = require("express");

const bodyParser = require('body-parser')


const PORT = 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

app.get("/contact-us", (req, res, next) => {
  console.log("Inside the middleware handling contact us");
  res.send(`<h1>Contact Us</h1>
    <form action="/contact-us" method="POST">
    <input type='text' placeholder='name' name='username' for='username'><br>
    <input type='email' placeholder='email' name='email' for='email'><br>
    <button type="submit">Submit</button>
    </form>
    `);
});
//before parsing the body, req.body will not work
app.post("/contact-us", (req, res, next) => {
  console.log('first handling ', req.body);
  next();
});

// use of body-parser to parse the body by its in-built 
// parser middleware. This will parse the request and add it to req.
app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
  res.send(`Thank you for contacting us ${JSON.stringify(req.body)}`);
});

app.use("/", (req, res, next) => {
  console.log(
    `request path is : ${req.url}, and request method is : ${req.method}`
  );
});

app.get("/hello", (req, res, next) => {
  console.log(
    `request path is : ${req.url}, and request method is : ${req.method}`
  );
  next();
});

app.get("/", (req, res, next) => {
  res.send("<h1>Hello Dolly</h1>");
});
