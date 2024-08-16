import { User, validateUser } from "../models/user.model.js";
import mongoose from "mongoose";
import express from "express";

const signupRouter = express.Router();

signupRouter.post("/", async (req, res) => {
  console.log(req.body);
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    await newUser.validate();

    await newUser.save();
    return res.status(201).send(newUser);
  } catch (error) {
    console.log("Failed to Register the User: ", error);
    return res.status(500).send("Failed to Register the User");
  }
});

export default signupRouter;
