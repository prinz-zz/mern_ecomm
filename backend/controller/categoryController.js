import Category from "../models/categoryModel.js";
import { validateMongoDbId } from "../utils/validateMongoDbId.js";
import asyncHandler from "express-async-handler";

//create a new category
export const createCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//update a category
export const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//Delete a category
export const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    res.json(deletedCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//get a category
export const getACategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
      const getACategory = await Category.findById(id);
      res.json(getACategory);
    } catch (error) {
      throw new Error(error);
    }
  });


//get all category
export const getCategory = asyncHandler(async (req, res) => {
    try {
      const getCategory = await Category.find();
      res.json(getCategory);
    } catch (error) {
      throw new Error(error);
    }
  });
