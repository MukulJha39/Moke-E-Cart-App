import express from "express"
import { addToCart , getCart , deleteCartItem } from "../controllers/cartController.js";

const routerCart = express.Router();

routerCart.route("/").post(addToCart)
routerCart.route("/:id").delete(deleteCartItem)
routerCart.route("/").get(getCart)


export default routerCart;
