import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

router.get("/", getProducts); //ALTERNATIVE SYNTAX : router.route('/').get(getProducts)
router.get("/:id", getProductById);
export default router;
