import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    author: { type: String, required: true },
    tags: { type: [String] },
    isPublished: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export const Course = mongoose.model("Course", courseSchema);
