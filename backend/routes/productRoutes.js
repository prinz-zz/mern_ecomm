import express from "express";
const router = express.Router();
import {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct
} from "../controller/productController.js";
import { verifyToken, checkIsAdmin } from "../middlewares/verifyToken.js";

router.post("/create", createProduct);
router.get("/get/:id", verifyToken, checkIsAdmin, getProduct);
router.get("/get", verifyToken, checkIsAdmin, getAllProducts);
router.patch("/:id", verifyToken, checkIsAdmin, updateProduct);
router.delete("/:id", verifyToken, checkIsAdmin, deleteProduct);

export default router;
