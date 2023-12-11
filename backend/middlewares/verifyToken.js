import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

export const verifyToken = asyncHandler(async (req, res, next) => {
  let token;

  // read JWT from cookie
  token = req.cookies.jwt;
  //console.log(token);

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      //  console.log("decoded", decoded.userId);
      next();
    } catch (error) {
      throw new Error("Invalid JWT token");
    }
  } else {
    throw new Error("Unauthorized, No Token");
  }
});

export const checkIsAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await User.findOne({ email });
  if (adminUser.isAdmin !== true) {
    throw new Error("You are not an Admin!");
  }else{
    next();
  }
});
