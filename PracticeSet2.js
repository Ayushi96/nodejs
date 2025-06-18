/**
 * Create a Calculator.
 */

const http = require("http");
const additionFn = require("./PracticeSet2AdditionModule");
const PORT = 3000;

const server = http.createServer((req, res) => {
  let sum;
  if (req.url === "/") {
    res.write(`<h1> Welcome !! </h1>
            <h2> <a href='/calculator'> Calculator</h2>`);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.write(`<h1>Calculator</h1>
            <form action="/calculate-result" method="POST">
            <label name="number1" for="number1">First Number</label>
            <input type="text" id="num1" name="number1" placeholder="0"><br><br>
            <label name="number2" for="number2">Second Number</label>
            <input type="text" id="num2" name="number2" placeholder="0">
            <br><br>
            <button type="submit">Sum</button>
            </form>`);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculate-result") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const responseObject = Buffer.concat(body).toString();
      const bodyObject = new URLSearchParams(responseObject);
      const first = bodyObject.get("number1");
      const second = bodyObject.get("number2");
      sum = additionFn(first, second);
      res.write(`The sum is ${sum}`);
      return res.end();
    });
  }
  //   else if (req.url.toLowerCase() === "/result") {
  //     res.write(`The sum is ${sum}`);
  //     return res.end();
  //   }
});

server.listen(PORT, () => {
  console.log("Started listening on PORT : ", PORT);
});
