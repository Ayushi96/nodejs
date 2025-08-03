function requestHandler(req, res) {
  // anything after the port number
  console.log(req.url);
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

exports.handler = requestHandler;
