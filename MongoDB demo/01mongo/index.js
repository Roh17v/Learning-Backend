import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/db/index.js";
import { Course } from "./models/course.model.js";
import Joi from "joi";
import { Author } from "./models/author.model.js";

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

app.post("/createcourse", async (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const course = new Course(req.body);
    await course.validate();
    const result = await course.save();
    return res.status(201).send(result);
  } catch (error) {
    console.log("Failed to Create the Course: ", error);
    res.status(500).res(error);
  }
});

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    author: Joi.string().min(3).required(),
    tags: Joi.array(),
    category: Joi.string().valid("web", "Mobile", "DevOps").required(),
    price: Joi.number().required(),
    isPublished: Joi.boolean().required(),
  });

  return schema.validate(course);
}

// async function updateCourse(id) {
//   const course = await Course.findById(id);
//   if (!course) return;

//   course.set({
//     name: "python for beginners",
//     tags: ["python", "machine learning"],
//   });

//   const result = await course.save();
//   console.log(result);
// }

// updateCourse("66bc7ceeab7dfedf040641a5");

// async function createAuthor(name, bio, website) {
//   try {
//     const author = new Author({
//       name,
//       bio,
//       website,
//     });
//     await author.validate();
//     const result = await author.save();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// createAuthor(
//   "mosh",
//   "A great Teacher with over 20 years of experience",
//   "www.codewithmosh.com"
// );

// async function createCourse() {
//   try {
//     const courseData = new Course({
//       name: "Python for Beginners",
//       author: "66be140e0dde9e027d9a7abb",
//       tags: ["python","machine learning"],
//       category: "web",
//       isPublished: true,
//       price: 20,
//     });
//     await courseData.validate();
//     const result = await courseData.save();
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// createCourse();

async function listCourse()
{
  const courses = await Course.find().populate('author','name -_id');
  console.log(courses);
}

listCourse();

// async function getUser() {
//   const courses = await Course.find({ author: /^Kunal/i });
//   console.log(courses);
// }

// getUser();
