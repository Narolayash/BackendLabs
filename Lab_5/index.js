const url = require('url');

const myUrl = "https://www.example.com:8080/search?query=test&category=web"

console.log(url);
console.log(url.parse(myUrl));
console.log(url.parse(myUrl, true));

// Write a program that parses the given URL, Print protocol, hostname, pathname, and query 
// parameters separately. (A) 

const parsed = url.parse(myUrl, true);
console.log(parsed);
console.log(parsed.protocol);
console.log(parsed.host);
console.log(parsed.hostname);
console.log(parsed.path);
console.log(parsed.pathname);
console.log(parsed.query);
console.log(parsed.query.query);
console.log(parsed.query.category);


// Create a new URL object with base, then append pathname and query, also print the final 
// URL. (B) 
const newUrl = new URL("https://www.example.com");
console.log(newUrl);





// 6) Create an EventEmitter instance, Register an event "greet" and print a message when 
// triggered. Fire that event manually using .emit().(B)
console.log("----- 6 -----");
const EventEmitter = require('events');

// console.log(EventEmitter);
const emitter = new EventEmitter();
// console.log(emitter);

emitter.on("greet",  () => {
    console.log("Hello! good morning");
});

emitter.emit("greet");

setInterval(() => {
    emitter.emit("tick");
}, 2000);

emitter.on("tick", () => {
    console.log("Tick tock");
});

