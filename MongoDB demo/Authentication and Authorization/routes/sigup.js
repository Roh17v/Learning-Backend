import { User, validateUser } from "../models/user.model.js";
import _ from "lodash";
import express from "express";
import bcrypt from "bcrypt";

const signupRouter = express.Router();

signupRouter.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  try {
    const newUser = new User(_.pick(req.body, ["name", "email", "password"]));

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    await newUser.validate();
    await newUser.save();
    return res.status(201).send(_.pick(newUser, ["_id", "name", "email"]));
  } catch (error) {
    console.log("Failed to Register the User: ", error);
    return res.status(500).send("Failed to Register the User");
  }
});

export default signupRouter;
