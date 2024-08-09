const express = require("express");
const Joi = require("joi");

const app = express();

//middleware
app.use(express.json());

//custom middleware function
app.use(function (req, res, next) {
  console.log("Authenticating...");
  next();
})

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("Not Found");
  res.send(course);
});

app.post("/api/courses", (req, res) => {
  const { error } = validateSchema(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("Not Found");

  const { error } = validateSchema(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  course.name = req.body.name;
  res.send(course);
});

app.delete('/api/courses/:id',(req, res) => {
  const course = courses.find((course) => course.id === parseInt(req.params.id))
  if(!course)
  {
    return res.status(404).send("Not Found");
  }

  const index = courses.indexOf(course);
  courses.splice(index,1);
  res.send(course);
})

function validateSchema(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(course);
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Listenig on PORT:", 3000));
