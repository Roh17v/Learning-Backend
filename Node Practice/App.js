const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World!");
    res.end();
  }

  if (res.url === "/api") {
    res.write(JSON.stringify([1, 2, 3, 4]));
    res.end();
  }
});

server.on("connection", (socket) => {
  console.log("New Connection!");
});

server.listen(3000);

console.log("Listening on port: 3000");
