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
  resetPassword
} from "../controller/userController.js";
import { verifyToken, checkIsAdmin } from "../middlewares/verifyToken.js";

router.post("/register", registerUser);
router.post("/login", userLogin);
router.post("/forgotPassword", forgotPasswordToken);
router.post("/resetPassword", resetPassword);
router.get("/getAll", verifyToken, checkIsAdmin, getAllUsers);
router.get("/:id", verifyToken, getUser);
router.post("/logout", logout);
router.patch("/:id", verifyToken, checkIsAdmin, updateUser);
router.delete("/:id", verifyToken, checkIsAdmin, deleteUser);
router.patch("/password", verifyToken,  updatePassword);


export default router;
