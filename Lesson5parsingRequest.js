// ------------------ STREAMS --------------------

/**
 * What are Streams?
 * Continues flow of data in a continuous way.
 * The data does not get transferred in a chunk as a whole,
 * rather it gets transferred in parts, hence the name Stream.
 * 
 * DUPLEX STREAM: dono taraf se data ek bar me aa ja sakta hai.
 * As opposed to walkie-talkie, jisme ek bar me ek hi taraf se data
 * send ho pata hai, that is why over and out kehte hain taki 
 * next person can start speaking. Duplex me aisa nahi karna padta hai.
 */

// ------------------ SOCKET -------------------

/**
 * ANALOGY: When we want to charge anything, we plug in the charger in the socket.
 * There exists a circuit of wires in the walls already, and the socket helps you
 * connect with that circuit of wires.
 * Hence, Socket is the gate for communication.
 *
 * PURPOSE: helps us join with a connection. So socket is the gateway for communication.
 * Socket se data aata jata hai.
 *
 * REPRESENTATION: localhost:3000
 */

// ------------------ DUPLEX STREAM ---------------

/**
 * There are 2 connection created, you can send and receive data at the same time.
 */

// ------------------ CHUNKS -----------------------

/**
 * Smallest size of the data that we are transferring through the stream.
 * So the stream of data is transferred in chunks.
 *
 * Jaise hi phla chunk aaya, wo process hone lagta hai.
 * Processing matlab use.
 * This is true for both upload and download.
 */

// ------------------ BUFFERS -----------------------

/**
 * Sometimes some chunks are lost or come out of order.
 * But the sequence of the data matters in most contexts.
 * Hence, in order to preserve this order of data we create a Buffer.
 * So, buffer will collect the amount of data in sequence that makes sense,
 * and then provides for further processing.
 */

/**
 * In our code, the function that http.createServer() uses takes 2 args.
 * req --> as soon as the first chunk of data is received, it says that the
 * request has been received. But the data can be huge as well, so we need to handle
 * the whole data.
 */

const http = require("http");
const fs = require("fs");
const PORT = 3000;

const server = http.createServer((req, res) => {
  // Render a form on home page
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body>");
    res.write("<h1>Welcome to Home page</h1>");
    res.write('<form action="/submit-details" method="POST">');
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
    return res.end();
  }
  // when user submits the form
  else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    /**
     * Node is event-driven. Any action is done on an event.
     */
    /* listen for the new data to come: you are saying that jab bhi data aa jae tuh meko bata dena.
     * Bataega kaise? using the callback
     */
    req.on("data", (chunk) => {
      /**
       * current you will be seeing some jibrish in the log even though the request payload will show the
       * correct data sent by the user. The data would be coming in chunks, so we need to keep it in a buffer.
       * on will also ensure that the data chunks are in sequence.
       */
      console.log(chunk);
    });

    /**
     * Whenever we will receive a chunk of data, we will store it in an array.
     * In order to know that the entire chunk of data has been received, we will register one more event:
     * "end" - this event will be called once all the data has been received.
     */
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      // once all the data has been received, we will create a parsed body from the buffer
      const fullBody = Buffer.concat(body).toString(); // Buffer is a built-in class of Node.js
      //  used to handle Binary data directly
      console.log(fullBody); // name=Ayushi+Vishwakarma&gender=female
      const params = new URLSearchParams(fullBody);
      const bodyObject = {};
      // one way to get the values
      for (const [key, value] of params.entries()) {
        bodyObject[key] = value;
      }
      console.log(bodyObject);
      // another way
      const bodyObject2 = Object.fromEntries(params);
      console.log(bodyObject2);
      // convert the bodyObject2 into string and write in my file
      fs.writeFileSync("user.txt", JSON.stringify(bodyObject2));
    });

    // redirection
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});

server.listen(PORT, () => {
  console.log("Started server on port ", PORT);
});
