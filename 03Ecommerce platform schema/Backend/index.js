import dotenv from "dotenv";
import express from "express";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user", (req, res) => {
  res.send("Enter User Details.");
});

app.listen(PORT, () => {
  console.log(`Server started listening at Port:${PORT}`);
});
