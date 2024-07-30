import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

const app = express();

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Sever Started Listening at PORT ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("MONGO DB Connection Failed: ", error);
  });
