const http = require("http");
const fs = require("fs");

const PORT = 3000;
requestListener = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body>");
    res.write("<h1>Welcome to Home page</h1>");
    /**
     * action will tell which URL will this data be taken to.
     */
    res.write('<form action="/submit-details" method="POST">');
    /**
     * Server will create a response and it will be in json format.
     * To construct the key value pair, it will use name property of
     * each input and populate the json request with  name: value
     * eg. username: Ayushi
     */
    res.write(
      '<input type="text" id="name" name="name" placeholder="Enter your name"><br><br>'
    );
    res.write('<label for="gender"> Gender: </label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male"> Male </label>');
    res.write(
      '<input type="radio" id="female" name="gender" value="female"> Female </label> <br><br>'
    );
    res.write('<button type="submit"> Submit</button>');
    res.write("</form>");
    res.write("</body></html>");
    // if you don't write return then the client will keep on waiting for response.
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    fs.writeFileSync("user.txt", "Ayushi");
    // redirection
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<body><h1>Default page!</h1></body></html>");
  res.end();
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
  console.log("Server started listening !");
});
