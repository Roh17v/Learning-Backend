import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/db/index.js";
import { Course } from "./schemas/course.schema.js";
import Joi from "joi";

const app = express();
dotenv.config();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post("/createcourse", (req, res) => {
  const { error } = validateCourse(req.body);
  console.log(error);
  if (error) return res.status(400).send(error.details[0].message);

  const course = new Course(req.body);
  const result = course
    .save()
    .then((result) => {
      console.log(result);
      return res.status(201).send(result);
    })
    .catch((error) => {
      console.error("Error creating course:", error);
      return res
        .status(500)
        .send("Failed to create course. Please try again later.");
    });
});

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    author: Joi.string().min(3).required(),
    tags: Joi.array(),
    isPublished: Joi.boolean().required(),
  });

  return schema.validate(course);
}

// async function createUser(course) {
//   const courseData = new Course(course);

//   const result = await courseData.save();
//   console.log(result);
//   return result;
// }

// createUser();

// async function getUser() {
//   const courses = await Course.find({ author: /^Kunal/i });
//   console.log(courses);
// }

// getUser();
