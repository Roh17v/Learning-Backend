import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    seller_id: {
        type: Number,
        required: true
    }
  },
  { timestamps: true }
);

export const Seller = mongoose.model("Seller", sellerSchema);
