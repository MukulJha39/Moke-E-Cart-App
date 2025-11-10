import mongoose from "mongoose";
import Item from "./productmodel.js";

const cartItemSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: Item },
    quantity: { type: Number, default: 1 },

    userId: { type: String, default: "mock_user" },
  },
  { timestamps: true }
);

const cartitem = mongoose.model("cartitem", cartItemSchema);
export default cartitem;
