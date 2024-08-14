import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/db/index.js";
import { Course } from "./schemas/course.schema.js";

const app = express();
dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("Listening on PORT:", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("MONGO DB Connection Failed: ", error);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hello", (req, res) => {
  res.send("Hello");
});

// async function createUser() {
//   const course = new Course({
//     name: "Angular",
//     author: "Mosh Hemadani",
//     tags: ["Angular", "frontend"],
//     isPublished: true,
//   });

//   const result = await course.save();
//   console.log(result);
// }

// createUser();

async function getUser() {
  const courses = await Course.find({ author: /^mosh/i }).countDocuments();
  console.log(courses);
}

getUser();
