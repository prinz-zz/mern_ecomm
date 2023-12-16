import express from "express";
const router = express.Router();
import {
  createCoupon,
  getAllCoupons,
  updateCoupons,
  deleteCoupons,
} from "../controller/couponController.js";
import { verifyToken, checkIsAdmin } from "../middlewares/verifyToken.js";

router.post("/create", verifyToken, checkIsAdmin, createCoupon);
router.get("/", verifyToken, checkIsAdmin, getAllCoupons);
router.put("/:id", verifyToken, checkIsAdmin, updateCoupons);
router.delete("/:id", verifyToken, checkIsAdmin, deleteCoupons);

export default router;
