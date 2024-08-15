import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    author: { type: String, required: true },
    tags: {
      type: Array,
      validate: {
        validator: function (v) {
          return v && v.length > 0;
        },
        message: "A Course Should Contain Atleat One Tag",
      },
    },
    isPublished: { type: Boolean, required: true },
    category: {
      type: String,
      enum: ["web", "Mobile", "DevOps"],
      required: true,
    },
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
