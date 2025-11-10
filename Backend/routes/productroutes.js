import express from "express"
import { Router } from "express";
import { data } from "../assets.js";
import { getProducts } from "../controllers/productcontroller.js";


export const router = express.Router();

router.route("/").get(getProducts)
