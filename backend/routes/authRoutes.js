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
} from "../controller/userController.js";
import { verifyToken, checkIsAdmin } from "../middlewares/verifyToken.js";

router.post("/register", registerUser);
router.post("/login", userLogin);
router.get("/getAll", verifyToken, checkIsAdmin, getAllUsers);
router.get("/:id", verifyToken, getUser);
router.post("/logout", logout);
router.patch("/:id", verifyToken, checkIsAdmin, updateUser);
router.delete("/:id", verifyToken, checkIsAdmin, deleteUser);

export default router;
