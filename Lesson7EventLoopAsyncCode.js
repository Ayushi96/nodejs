// ------------- EVENT DRIVEN ---------------

/**
 * We will have an event listener that will be listening to the events.
 * Whenever an event occurs, that event will be sent to a queue jisko Event Queue kehte hain. 
 * Eg. humare chunks of data ki stream aa ri hai, tuh jab bhi data aega tuh listener ko pata chalega.
 * Jo callback humne "data" listener pe lagaya tha wo callback is event queue k andar aa jaega.
 * Then wo queue Event Loop k pas jaega execute hone k lie, tuh jo Event Handler hai wo ek ek
 * kar k queue k events ko handle karega. So wo callback Event Handler me execute hoga. Handler is
 * basically the reaction to that event. 
 */

// ------------- SINGLE THREADED --------------

/**
 * Any kaam like requests, callback, etc. ko execute karne wala bas ek hi insaan hai 
 * i.e, Event Loop. Event loop k pas kai sare workers hain thread pool me jinko ki wo 
 * kaam deligate kar deta hai. 
 * 
 * Since ek hi thread hai for execution, ek time pe ek hi user request handle ho sakti hai.
 * So koi bhi important non-blocking kaam hai tuh wo event loop karega, usk alawa koi kaam hai 
 * i/o ka ya lamba calculation ka kaam, that will be deligated to the workers.
 * 
 * Say humne koi lamba kaam jaise ki file writing event loop ko karne ko bol dia in a sync manner
 * then us time pe aur koi bhi kaam aega tuh wo block ho jaega.
 * 
 */

// --------------- V8 --------------------

/**
 * Opne-source JS engine by google, jo ki chrome me use hota hai.
 * V8 har platform pe alag wala install hota hai.
 *  
 */

// ---------------- libuv -----------------

/**
 * Ye bhi multi-platform support library hai for Node.js
 * Handles async i/o operations, i.e event loop ka base yahi hai.
 * So basically async is this only ki you delegate the work and carry on with your work, 
 * you don't sit and wait for the delegated work to be completed. 
 * Iski wajay se hi event driven architecture support ho pata hai. 
 * It manages file system, networking and timers non-blockingly across platforms. 
 * 
 * Node k run time me we mainly have these two things: V8 & libuv
 */

// ------------- NODE RUNTIME -------------------

/**
 * source of animation: @FabriLallo & @AndrewHu368
 * 
 * Say we have a code jisme : 
 * 1. console.log('starting node.js')
 * 2. i/o operation query
 * 3. console.log('before query result')
 * 
 * 1st console log V8 engine k pas aega execute hoga and end. 
 * 2nd query (i/o) jab aya, phle V8 k pas aega --> V8 will sent it to libuv
 * livub apna query ko execute karega 
 * Main thread of execution aage badh jaega and 3rd line of console ko execute karega
 * Ab maan lo libuv k worker thread ne query wala kaam pura kar lia, then libuv will put that
 * result printing ka kaam (callback) in the event queue.
 * Event queue dekhega ka main thread (V8) abhi khali hai tuh wapas callback ko V8 engine pe daal dega
 * V8 us result wali line ko execute kar k print kar dega. 
 * 
 */

// ------------- PRIORITY -------------------

/**
 * 1. timers
 * 2. pending callbacks
 * 3. 
 */