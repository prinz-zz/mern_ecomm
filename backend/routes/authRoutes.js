import express from "express";
const router = express.Router();
import {
  registerUser,
  userLogin,
  getAllUsers,
  getUser,
  logout,
  updateUser,
  deleteUser,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  adminLogin,
  getWishlist,
  saveUserAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus
} from "../controller/userController.js";
import { verifyToken, checkIsAdmin } from "../middlewares/verifyToken.js";

router.post("/register", registerUser);
router.post("/login", userLogin);
router.post("/loginAdmin", adminLogin);
router.post("/cart", verifyToken, userCart);
router.post("/cart/applycoupon", verifyToken, applyCoupon);
router.post("/cart/cashorder", verifyToken, createOrder);
router.post("/forgotPassword", forgotPasswordToken);
router.post("/resetPassword", resetPassword);
router.post("/logout", logout);


router.get("/getAll", verifyToken, checkIsAdmin, getAllUsers);
router.get("/wishlist", verifyToken, getWishlist);
router.get("/getCart", verifyToken, getUserCart);
router.get("/getOrders", verifyToken, getOrders);
router.get("/:id", verifyToken, getUser);


router.patch("/:id", verifyToken, checkIsAdmin, updateUser);
router.patch("/password", verifyToken,  updatePassword);
router.put("/address", verifyToken,  saveUserAddress);
router.put("/updateOrderStatus/:id", verifyToken, checkIsAdmin, updateOrderStatus);

router.delete("/:id", verifyToken, checkIsAdmin, deleteUser);
router.delete("/emptyCart", verifyToken, emptyCart);






export default router;
