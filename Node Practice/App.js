const log = require("./script");
const os = require("os");
const fs = require("fs");
const EventEmmitter = require("events");
const event = new EventEmmitter();

// listening for an event named message logged
event.on("message logged", () => {
  console.log("Event Listened");
});

// emitting an event named message logged
event.emit("message logged");


// log("Hello World!");

const path = require("path");

let pathObj = path.parse(__filename);
// console.log(pathObj);

// console.log(os.uptime());

// console.log(fs.readdir('./',(err,files) => {
//     if(err) console.log("Error: ",err);
//     else console.log(files);
// }))
