/**
 * ----------- JAVASCRIPT RUNTIME--------
 * 
 * Original Author: Lydia Hallie
 * ======================================
 */

// -------------- EVENT LOOP -----------

/**
 * JS Runtime ka component hai. 
 * Event Loop is a mechanism in JS that handles async operations,
 * ensuring that non-blocking tasks are executed efficiently. 
 * 
 * Iska kaam hai ki JS single threaded hone k baad bhi non-blocking 
 * tasks sare efficiently execute ho jae, koi zayda der wait na kare, 
 * sare tasks efficiently execute hoe, bina hang hoe. 
 * 
 * Js ek time pe ek hi kaam kar sakta hai, event loop manages multiple
 * tasks without blocking the main thread. Ordering karna of the tasks, etc. 
 * 
 */

// --------------- CALL STACK -----------

/**
 * Say humare pas ek long running task hai x()
 * and ek important task hai y()
 * 
 * Humne code likha hai :
 * x()
 * y()
 * 
 * In this case, phle x() will be on the call stack, 
 * ab ye lamba time lagaega execute hone me, 
 * itne time tak humara important task blocked hai. 
 * Program freeze ho jaega, or to say user ko aisa lagega
 * cause kaam tuh ho raha hi but user ko koi response nahi mil
 * raha hai tuh user ko lagega ki program hang ho gaya hai. 
 * Jab ye long running task compelete hoga tab ja k important call hoga y()
 * 
 */


// ------------ WEB API & BROWSER ENVIRONMENT -------------

/**
 * Ye jo call stack ki problem thi, usko solve karne k lie ye use hota hai. 
 * 
 * Web APIs: 
 * 1. Fetch API: network se kuch le kar ana hai
 * 2. Timer API: koi kaam apko thodi der baad karna hai 
 * 3. Console API: kuch log karna hai 
 * 4. Geolocation API: location chahiye user ki
 * 5. Web Storage API: hard disk me store karna hai kuch 
 * 6. File API: file banani hai 
 * 7. Performance API: performance manage karni hai
 * 8. HTML DOM: html dom manipulate karni hai 
 * 9. URL API: 
 * 
 * So what it is saying is ki apne call stack me jo important kaam hai, 
 * chota kaam hai wo karte rahiye aur jab bhi koi bada kaam ae, web api ko de do.
 * Wo kaam apka call stack single thread wala nahi lega but rather browser apna thread bana kar
 * karega. 
 */

/**
 * Browser Environment:
 * 1. Rendering Engines: Apne tuh css sa text me define kari usko actually paint karne k lie.
 * 2. Network Services: Internet se jo bhi chez upload karni hai ya download karni hai.
 * 3. GPU: Painting and AI k kaamo k lie GPU.
 * 
 * Sensors, file system, storage engines, camera, microphone, authentication, geo-locaiton. 
 * 
 * Tuh ye sab jab ho raha hai tuh apka call stack free hai, browser apne thread se, apne resources
 * ko use kar k ye sab kaam kar raha hai. 
 * 
 */

// -------------- ASYNC TASK API -----------

/**
 * asyncTask((result) => console.log(result));
 * 
 * Async Task API bolra hai ki aap apna function pass kar dijie and mai usko browser
 * environment me run karunga, apka call stack nahi use hoga. 
 * So ye Web APIs ek bridge hain, between call stack and the browser features.
 * ye api task le k browser ko de dega execute karne ko.
 * 
 * So yaha pe ye asyncTask() jaega Web API k pas, wo browser ko dega async task karne ko
 * then browser result wapas karega to Web API, then finally apka callback call ho jaega. 
 */

// ------------- Popular Web APIs ----------------

/**
 * ek tuh callback wali, jinko hum callback dete hain, eg. 
 * 
 * navigator.geolocaiton.getCurrentPosition( position => console.log(position), 
 * error => console.log(error))
 * 
 * Promise based APIs
 * 
 * fetch("...").then(res => ...)
 * 
 *
 */

// ---------------- TASK QUEUE ------------------

/**
 * Callback call kaise hoga?
 * 
 * Phle jo callback fn tha wo task queue me jata hai, isk baad
 * event loop dekhega ki call stack me kuch already hai ki nahi.
 * Agar khali hai call stack, tuh is callback wale task ko utha k 
 * call stack pe daal dega for execution. 
 * 
 */

// ------------  MICRO-TASK QUEUE ----------------

/**
 * MicroTask queue has a higher priority than Task Queue.
 * Promise wale jitne tasks hain i.e Promise Handler callbacks, 
 * then, catch, finally wo sab micro task queue me jate hain. 
 * Async wala await ka code bhi microtask queue me jata hai. 
 * 
 * Sare micro task phle finish karenge, usk baad task queue wale tasks aenge
 * call stack me. 
 * 
 * Although starvation of task queue ka issue ho sakta hai, tuh micro tasks bhi aise nahi 
 * hone chahiye jo ki repetative way me new micro tasks generate karti rahe. 
 * 
 */

// --------------- PROMISE BASED EXECUTION --------------

/**
 * Promise me we have: 
 * 1. promise state
 * 2. promise result
 * 3. promise fulfill reaction
 * 
 * .then() bhi call stack pe jaata hai, and then wo ja k PromiseReaction ko de dia jata hai 
 * ki network request (say we used fetch) success hone k bad send this then() to micro task queue.
 * 
 * 
 */