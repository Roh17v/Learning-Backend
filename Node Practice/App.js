const log = require("./script");
const os = require('os');

// log("Hello World!");

const path = require("path");

let pathObj = path.parse(__filename);
// console.log(pathObj);

console.log(os.uptime());
