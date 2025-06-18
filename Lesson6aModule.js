// ----------------- MODULES --------------

/**
 * I can separate out different functionalities in different files.
 * Say I separate out the concern of creating a server in one file, i.e the
 * current file.
 *
 *
 */

const http = require("http");
// importing custom modules
const userRequestHandler = require("./Lesson6bModule");
const PORT = 3000;

const server = http.createServer(userRequestHandler);

server.listen(PORT, () => {
  console.log("Started server on port ", PORT);
});
