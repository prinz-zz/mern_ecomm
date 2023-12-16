import express from "express";
const router = express.Router();
import {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct, 
  addToWishlist,
  ratings,
  uploadImages,
} from "../controller/productController.js";
import { verifyToken, checkIsAdmin } from "../middlewares/verifyToken.js";
import { uploadPhoto, productImgResize } from "../middlewares/uploadImages.js";

router.post("/create", createProduct);
router.get("/get/:id", getProduct);
router.get("/get", getAllProducts);
router.patch("/:id", verifyToken, checkIsAdmin, updateProduct);
router.delete("/:id", verifyToken, checkIsAdmin, deleteProduct);
router.put("/wishlist", verifyToken, addToWishlist);
router.put("/ratings", verifyToken, ratings);
router.put(
  "/upload/:id",
  verifyToken,
  uploadPhoto.array("images", 10),
  uploadImages,
  productImgResize 
);

export default router;
