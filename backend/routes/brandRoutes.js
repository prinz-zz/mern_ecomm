import express from "express";
const router = express.Router();
import {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrands,
  getABrand,
} from "../controller/BrandController.js";
import { verifyToken, checkIsAdmin } from "../middlewares/verifyToken.js";

router.post("/create", verifyToken, checkIsAdmin, createBrand);
router.patch("/:id", verifyToken, checkIsAdmin, updateBrand);
router.delete("/:id", verifyToken, checkIsAdmin, deleteBrand);
router.get("/:id", verifyToken, checkIsAdmin, getABrand);
router.get("/getAll", verifyToken, checkIsAdmin, getBrands);

export default router;
