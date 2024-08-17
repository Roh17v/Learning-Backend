import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/db/index.js";
import signupRouter from "./routes/sigup.js";
import signInRouter from "./routes/signin.js";

const app = express();
dotenv.config();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/signup", signupRouter);
app.use("/api/signin", signInRouter);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Listening on PORT: ${process.env.PORT}...`);
    });
  })
  .catch((error) => {
    console.log("Failed to Connect to MongoDB.", error);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});
