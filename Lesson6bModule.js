/**
 * I will create the request handler in this file.
 * I can export it to be used by Lesson6aModule which will be used to
 * create a server.
 */

const userRequestHandler = (req, res) => {
  console.log("handling the request and giving a response");
  res.end();
};

module.exports = userRequestHandler;
// you can also export multiple things from this module
module.exports = {
  handler: userRequestHandler,
  extra: "extra",
};

// setting multiple properties
module.exports.handler = userRequestHandler;
module.exports.extra = "extra";

// Shortcuts
exports.handler = userRequestHandler;
exports.extra = "extra";
