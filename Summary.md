# OVERALL SUMMARY 

## Lesson 1

So basically node is a runtime environment to run JS outside Browser. So say when you are even developing an angular application that will ultimately run in a browser, you will be building the application, bundling it, compiling typescript to javascript, running a dev server, managing dependencies. All these tasks are not done by the browser. 
* Angular CLI itself runs on Node.js
	* ng serve, ng build, etc. are node scripts
* Node Packager Manager (npm) manages the angular's dependencies

* Some functionalities were added to Chrome's V8 engine to make Node JS ( V8 + Backend Features = Node.js)
* V8 is written in C++, it compiles JS directly to native machine code. 
* Node js: cross-platform cause V8 phle se hi har platform k lie bana hua tha
* Node is non-blocking i/o mode, i.e thread ip/op pe block nahi hota hai, it'll move forward
* it is event driven.
* Chrome based architecture hai tuh scaleable bhi hai ( can handle lots of requests )
* REST Api supported
* Backend features: 
	* **Non-blocking I/O**: JS is single threaded, I/o ya network request type k kaam ko utha k Workers ko de dega taki main thread block na hoe. Logic execute karna hai tuh khud karega else worker ko de dega.
	* **Networking support**: Request -- Response wala ek pattern hota hai jisme ke baar response de dia and khatam, but kai baar aisa hota hai ki server se lagataar communication karni hai, eg. chat, so baar baar connection establish karna, handshake, end karne me overhead bht zayda ho jata hai, hence there is another technology i.e. sockets --> apk aur server k bech me ek permanent connection ho gaya so bar bar connection create karne ki zarurat nahi hai, say apke friend ne message bheja, wo sidhe server pe jaega, then server sidhe wo message apko de dega, baar baar connection nahi banana padega. 
	* **File System Access**: Browser me kya hota hai ki ek pop-up khulta hai then aap usme file upload kar k use kar sakte hain. But yaha pe aap ek ek file path pe khud ja sakte hain and unpe operations kar sakte hain.
	* **Server Side Capabilities**: HTTP requests, file operations
		* http: protocol (set of rules) by which the browser and the server communicate. The language used for communication over the web. So when you say http://example.com, your browser would not know where this website is, what file to send, what format the response be, how to ask server for it. Without http, every website should invent its own way of communication. So every website interaction is just: Request  →  Server processing  →  Response

	* **Modules**: modules can be used using require()

* Removed JS features: 
	* Window Object
	* DOM Manipulation
	* Browser Object Model(BOM) : no direct interaction with things like navigator or screen. Browser me apko dikhta hai ki link kaunsa khula hua hai, history me kya hai, you can go back on the page, those browser actions you cant do. Screen ka size change karna, etc. -- removed
	* Web Specific APIs: local storage, session storage, cookies (instead you can use the file system)

* JS on Client
	* So basically browser server se ja k html, css, js files download kar k lata hai, in files ka use kar k ek web page banata hai ( process is called rendering) and browser pe display karta hai. 
	* User clicks
	* Updates content
	* Loads files

* JS on Server
	* Database Management: DB me store, retrieve and manage karna (CRUD)
	* Authentication
	* Authorization
	* Input Validation
	* Session Management: login karne k baad, apne chahe jitne bhi tabs khole ho, sab synchronised hai 
	* API Management: smooth data exchange
	* Error Handling
	* Security Measures
	* Encryption: apne apna password dala, tuh usko as is nahi send kar sakte 
	* Logging and Monitoring: monitor system health

* Client must raise request to certain APIs to access certain features
* Client directly DB manipulation nahi kar sakta hai
* Client ka code kiss our ki machine pe run ho Raha hai, in a way public hai, tuh client ko blindly trust nahi kar sakte
* Performance: heavy computation server side pe karna hota hai, khaki client ki machine ka pata nahi kiting powerful hai nahi hai 
* Storage: server generally offers more powerful processing and storage capabilities
* Async Operations: server side JS is optimised for non blocking I/O

* Node JS can also be used for scripting and real time applications: web-sockets 

* Build Tools: Webpack, Grunt, Gulp, etc. are built using JS -- compile different languages using these build tools

Lesson 2
---
Installation 
* Refer Lesson1firstNodeProgram.js

Lesson 3
---

## DNS : Domain Name Service

* Delivery kaise karenge, www.google.com --> data centers me google ka server hai, but request ko kaha kaunse server pe jana hai ? DNS ko pata rehta hai ki kaha pe bhejni hai ye request. 
	* DNS bhi 3 level pe chalta hai, eg. ek .com wale ka Domain Name Server (Top Level domain)

How the Web Works?
---

* Client Request Initiation: Client initiates the request
* DNS resolution: eg. myntra.com ka ip address mil jaega
* TCP Connection: browser establishes a TCP connection with server IP (reliable connection taki data sahi sequence me jae, lost packets are resent, receiver knows that no more packets are coming. )
* HTTP Request: actual request, ki eg. meko jeans k options dekhne hain myntra pe
* Server Processing: kya kya bhejna hai, prices, photos, discounts, coupons, etc. 
* HTTP Response: server response dega using the same protocol
* Network Transmission: response travels back to the browser
* Client Receives Response
* Rendering: renders the received response

Protocols
---
* http
	* communication between browser and server
	* data is sent in plain text
	* basic website browsing without security
* https
	* secure version of http
	* Usses SSL/TLS to encrypt data
	* used in online banking, ecommerce
* tcp
	* reliable, ordered and error-checked data transmit ho over internet
	* phle connection banao then send 

Node Core Modules
---

* basic Built in modules, installed with Node itself
* eg, fs, http, https, path (path handling), path.os (deal with paths in different os), events, crypto, url
* **require()** : imports module
* **path resolution**: searches for these modules in core, node_modules, and file paths (relative file module).
* Refer **Lesson2app.js** for code and explanation.

Lesson 4
---

* Refer PDF notes for diagram for Node Lifecycle
* Event Loop actual kaam karta hai, jo jo kaam aata hai event queue me admit hota jata hai and ye event loop ek ek kar k un kaam ko process karta hai
* Jo Node ka main thread hai wo sare kaam khud nahi karta hai, koi complex kaam hota hai wo worker thread ko karne ko de deta hai
* Ek Thread Pool hota hai jiko ki blocking kaam deligate kar deta hai and kehta hai ki jab kaam pura ho jae tuh meko wapas la k dena (call backs ki help se)

## Code
* Refer the code now: Lesson2app.js & Lesson3user.js
* **process.exit()** -- to stop the server
* process variable is available by default like window in front end
* request me humare pas info hoti hai like url, header, method
* port tak k machine ka address hota hai, usk baad ka jo part hota hai wo url me aega, eg. http://localhost:3000 me url is just /
* response ka header set karna hoga hume, then you can write the response in the form of a string by using res.write()  -- js file me its like a way to do this but ultimately we'll use express
* Once you call res.end(), no more processing should be done in the function.
* **Refer Lesson3user.js** for taking user input using a form
* The name attribute's value will help construct the response data in json format where the key will be username in case you do name=username
* This way of creating the response if server side rendering, generally this form and all will be handled by the UI
* Do the Practice Set in the Lesson4navigationBarMyntra.js
* Refer Lesson5parsingRequest.js (has notes)





