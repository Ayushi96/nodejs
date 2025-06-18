// get http core module in variable http
const http = require("http");

/**
 *
 * @param {*} req
 * @param {*} res - returned response from the url
 * Keeps on listening
 */
function requestListener(req, res) {
  // anything after the port number
//   console.log(req.url);
//   console.log(req.method);
//   console.log(req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Tyoe", "text/html");
    res.write("<html>");
    res.write("<head><title>Node js </title></head>");
    res.write("<body><h1>Welcome to Home</h1></body>");
    return res.write("</html>");
    // close the connection and tell the client that no more data will be sent
    res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Tyoe", "text/html");
    res.write("<html>");
    res.write("<head><title>Node js </title></head>");
    res.write("<body><h1>Products</h1></body>");
    res.write("</html>");
    // close the connection and tell the client that no more data will be sent
    return res.end();
  } 
    res.setHeader("Content-Tyoe", "text/html");
    res.write("<html>");
    res.write("<head><title>Node js </title></head>");
    res.write("<body><h1>Ayushi</h1></body>");
    res.write("</html>");
    // close the connection and tell the client that no more data will be sent
    res.end();
  
  // console.log('exiting')
  /**
   * process is available in Node
   * just like window in js
   */
  // exit the server after receiving the first request
  // process.exit();
}

// create a server
const server = http.createServer(requestListener);

/* listen to port 3000
Your machine will be doing multiple things, 
so server should know that which port will be receiving the requests.

The second arg is a CB fn, which is executed when the server starts
listening on the PORT successfully.
*/
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
