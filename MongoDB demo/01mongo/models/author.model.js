import mongoose from "mongoose";

const author = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  website: {
    type: String,
  },
});

export const Author = mongoose.model("Author", author);
