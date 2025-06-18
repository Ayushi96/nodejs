const http = require("http");

const PORT = 3000;

function requestListener(req, res) {
  console.log(req.url);
  console.log(req.method);
  //   console.log(req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body>");
    res.write("<ul>");
    res.write("<li><a href='/home'> Home</a></li>");
    res.write("<li><a href='/men'> Men </a></li>");
    res.write("<li><a href='/women'> Women </a></li>");
    res.write("<li><a href='/kids'> Kids </a></li>");
    res.write("<li><a href='/cart'> Cart </a></li>");
    res.write("</ul>");
    res.write("</body></html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body>");
    res.write("<h1>Welcome to Home</h1>");
    res.write("</body></html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body>");
    res.write("<h1>Welcome to Men's Section </h1>");
    res.write("</body></html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body>");
    res.write("<h1>Welcome to Women's Section</h1>");
    res.write("</body></html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/kids") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body>");
    res.write("<h1>Welcome to Kid's Section </h1>");
    res.write("</body></html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/cart") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body>");
    res.write("<h1>Welcome to Cart</h1>");
    res.write("</body></html>");
    return res.end();
  }
}

const server = http.createServer(requestListener);

server.listen(PORT, () => {
  console.log("Myntra navigation bar Server started on port ", PORT);
});
