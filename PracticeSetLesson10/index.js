const express = require("express");

const PORT = 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

// express provides this middleware which handles parsing of
// incoming requests and populates req.body
app.use(express.urlencoded());

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

app.post("/contact-us", (req, res, next) => {
  const username = req.body.username;
  res.send(`Thank you for contacting us ${username}
    <br>
    <a href="/">Home</a>`);
});

app.use("/", (req, res, next) => {
  console.log(
    `request path is : ${req.url}, and request method is : ${req.method}`
  );
  res.send(`<h1>Welcome!</h1>
    <a href="/contact-us" method="GET">Contact Us</a>
    `)
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
