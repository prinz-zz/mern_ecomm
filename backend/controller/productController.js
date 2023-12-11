import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

//create a product
export const createProduct = asyncHandler(async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});

//get a product
export const getProduct = asyncHandler(async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    throw new Error("No products found");
  }
});

//get all products
export const getAllProducts = asyncHandler(async (req, res, next) => {
  //FILTERING
  const queryObj = { ...req.query };
  const excludeFields = ["page", "limit", "sort", "fields"];
  excludeFields.forEach((field) => delete queryObj[field]);
  console.log(queryObj);
  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

  let query = Product.find(JSON.parse(queryStr));

  //SORTING
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    query = query.sort(sortBy);
  } else {
    query = query.sort("-createdAt");
  }

  //LIMITING THE fields
  if (req.query.fields) {
    const fields = req.query.fields.split(",").join(" ");
    query = query.select(fields);
  } else {
    query = query.select("-__v");
  }

  //PAGINATION
  const page = req.query.page;
  const limit = req.query.limit;
  const skip = (page - 1) * limit;
  console.log(page, limit, skip);
  query = query.skip(skip).limit(limit)
  if(req.query.page){
    const productCount = await Product.countDocuments();
    if(skip >= productCount) throw new Error('This page does not exist');
    console.log('Count: ',productCount);
  }

  ////////////////////////////////
  try {
    const products = await query;
    res.json(products);
  } catch (error) {
    throw new Error("error");
  }
});

//update a product
export const updateProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  console.log("ID:", id);
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.json(updatedProduct);
  } catch (error) {
    throw new Error(error);
  }
});

//delete a product
export const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.json(deletedProduct);
  } catch (error) {
    throw new Error(error);
  }
});
