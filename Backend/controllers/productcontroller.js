import Item from "../models/productmodel.js";
export const getProducts = async (req, res) => {
    const mydata = await Item.find({})
  try {
    res.status(200).json({mydata});
  } catch (error) {
    res.send({ msg: error.message });
  }
};


