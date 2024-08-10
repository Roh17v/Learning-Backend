const express = require("express");
const config = require('config')
const app = express();
const courses = require('./routes/courses')

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use('/api/courses', courses);

console.log(process.env.NODE_ENV)
console.log(app.get("env"));
console.log(config.get('dbConfig.host'))

//custom middleware function
app.use(function (req, res, next) {
  console.log("Authenticating...");
  next();
});


app.get("/", (req, res) => {
  res.send("Hello World!");
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Listenig on PORT:", 3000));
