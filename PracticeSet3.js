const fs = require("fs");

console.log("1. start of script");

// synchronous (blocking) operation
console.log("2. reading file synchronously");
const dataSync = fs.readFileSync("user.txt", "utf8");
console.log("3. synchronous read complete ");

// asynchronous (non-blocking) operation
console.log("4. reading file asynchronously ");
fs.readFile("user.txt", "utf8", (err, dataAsync) => {
  if (err) throw err;
  console.log("6. asynchronous read complete");
});

console.log("5. End of script");
