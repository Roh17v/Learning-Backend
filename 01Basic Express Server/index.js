const express = require("express");
const dotnet = require("dotenv");
const app = express();

dotnet.config();
const PORT = process.env.PORT || 5173;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("Enter Your Details.");
});

app.get("/profile", (req, res) => {
  res.send("Username is Rohit Verma");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
