import express from "express";
const router = express.Router();
import { createCategory, updateCategory, deleteCategory, getCategory, getACategory } from '../controller/categoryController.js';
import { verifyToken, checkIsAdmin, } from '../middlewares/verifyToken.js';

router.post("/create", verifyToken, checkIsAdmin, createCategory);
router.patch("/:id", verifyToken, checkIsAdmin, updateCategory);
router.delete("/:id", verifyToken, checkIsAdmin, deleteCategory);
router.get("/:id", verifyToken, checkIsAdmin, getACategory);
router.get("/getAll", verifyToken, checkIsAdmin, getCategory);


export default router;
