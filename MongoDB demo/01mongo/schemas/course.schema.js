import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    author: { type: String, required: true },
    tags: { type: [String] },
    isPublished: { type: Boolean, required: true },
    category: {type: String, enum: ['web', 'Mobile', 'DevOps']},
    price: {
      type: Number,
      required: function () {
        return this.isPublished;
      },
    },
  },
  { timestamps: true }
);

export const Course = mongoose.model("Course", courseSchema);
