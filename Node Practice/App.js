const log = require("./script");
const os = require('os');
const fs = require('fs');

// log("Hello World!");

const path = require("path");

let pathObj = path.parse(__filename);
// console.log(pathObj);

// console.log(os.uptime());

console.log(fs.readdir('./',(err,files) => {
    if(err) console.log("Error: ",err);
    else console.log(files);
}))
