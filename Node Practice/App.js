const log = require("./script");

log("Hello World!");

const path = require("path");

let pathObj = path.parse(__filename);
console.log(pathObj);
