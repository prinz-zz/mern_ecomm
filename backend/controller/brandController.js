import Brand from "../models/brandModel.js";
import { validateMongoDbId } from "../utils/validateMongoDbId.js";
import asyncHandler from "express-async-handler";

//create a new Brand
export const createBrand = asyncHandler(async (req, res) => {
  try {
    const newBrand = await Brand.create(req.body);
    res.json(newBrand);
  } catch (error) {
    throw new Error(error);
  }
});

//update a Brand
export const updateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const updatedBrand = await Brand.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedBrand);
  } catch (error) {
    throw new Error(error);
  }
});

//Delete a Brand
export const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBrand = await Brand.findByIdAndDelete(id);
    res.json(deletedBrand);
  } catch (error) {
    throw new Error(error);
  }
});

//get a Brand
export const getABrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
      const getABrand = await Brand.findById(id);
      res.json(getABrand);
    } catch (error) {
      throw new Error(error);
    }
  });


//get all Brand
export const getBrands = asyncHandler(async (req, res) => {
    try {
      const getBrand = await Brand.find();
      res.json(getBrand);
    } catch (error) {
      throw new Error(error);
    }
  });
