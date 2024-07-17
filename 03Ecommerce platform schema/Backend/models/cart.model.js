import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const cartSchema = new mongoose.Schema({
  cartItems: {
    type: [cartItemSchema],
  },
  orderPrice: {
    type: Number,
    required: true,
  },
});

export const Cart = mongoose.model("Cart", cartSchema);
