import cartitem from "../models/cartmodels.js";

export const addToCart = async (req, res) => {
  const { productId, quantity = 1, userId = "mock_user" } = req.body;

  try {
    if (!productId || !quantity || quantity < 1) {
      return res
        .status(400)
        .json({ message: "productId and qty (>=1) are required" });
    }
    let item = await cartitem.findOne({ productId });
    if (item) {
      item.quantity += quantity;
      await item.save();
      return res.status(200).json({ message: "Cart updated", item });
    }
    item = new cartitem({ productId, quantity, userId });
    await item.save();
    res.status(201).json({ message: "Item added to cart", item });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export const getCart = async (req, res) => {
  try {
    const userId = req.query.userId || "mock_user";
    const items = await cartitem.find({ userId }).populate("productId");
    const total = items.reduce(
      (s, it) => s + (it.productId?.price || 0) * it.qty,
      0
    );
    res.json({ items, total });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export const deleteCartItem = async (req, res) => {
  try {
    const item = await cartitem.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Cart item not found" });
    res.json({ message: "Cart item removed", item });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export const checkOut = async (req, res) => {
  try {
    const { cartitems = [], name = "Guest", email = "" } = req.body;

    const items = await cartitem
      .find({ _id: { $in: cartitems } })
      .populate("productId");

    const total = items.reduce(
      (s, it) => s + (it.productId?.price || 0) * it.qty,
      0
    );
    const receipt = {
      id: new mongoose.Types.ObjectId(),
      name,
      email,
      items: items.map((it) => ({
        name: it.productId?.name,
        price: it.productId?.price,
        quantity: it.quantity,
        lineTotal: (it.productId?.price || 0) * it.qty,
      })),
      total,
      createdAt: new Date().toISOString(),
    };

    await cartitem.deleteMany({ _id: { $in: cartitems } });

    res.json({ message: "Checkout successful", receipt });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
