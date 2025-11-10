import mongoose from "mongoose";

const productShema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    imageUrl: String,
  },

  { timestamps: true }
);

const Item = mongoose.model("mockItem", productShema);
export default Item;
