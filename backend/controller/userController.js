import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import Cart from "../models/cartModel.js";
import Coupon from "../models/couponModel.js";
import asyncHandler from "express-async-handler";
import { generateToken } from "../config/generateToken.js";
import { refreshToken } from "../config/refreshToken.js";
import bcrypt from "bcrypt";
import { validateMongoDbId } from "../utils/validateMongoDbId.js";
import { sendEmail } from "./emailController.js";
import crypto from "crypto";

//register
export const registerUser = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const findUser = await User.findOne({ email });
  if (!findUser) {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } else {
    throw new Error("User already exists");
  }
});

//Login
export const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatch(password))) {
    generateToken(res, findUser._id);
    refreshToken(res, findUser._id);

    res.status(200).json({
      firstname: findUser.firstname,
      email: findUser.email,
      lastname: findUser.lastname,
    });
  } else {
    throw new Error("Invalid credentials");
  }
});

//Admin Login
export const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const findAdmin = await User.findOne({ email });
  if (findAdmin.isAdmin !== true) throw new Error("Not Authorised");

  console.log(findAdmin.isAdmin);

  if (findAdmin && (await findAdmin.isPasswordMatch(password))) {
    generateToken(res, findAdmin._id);
    refreshToken(res, findAdmin._id);

    res.status(200).json({
      firstname: findAdmin.firstname,
      email: findAdmin.email,
      lastname: findAdmin.lastname,
    });
  } else {
    throw new Error("Invalid credentials");
  }
});

//getWishlist
export const getWishlist = asyncHandler(async (req, res) => {
  const { id } = req.user;

  console.log(id);

  try {
    const findUser = await User.findById(id).populate("wishlist");
    res.json(findUser);
  } catch (error) {
    throw new Error(error);
  }
});

//save user address
export const saveUserAddress = asyncHandler(async (req, res) => {
  const { id } = req.user;
  validateMongoDbId(id);

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        address: req.body.address,
      },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
});

//userCart
export const userCart = asyncHandler(async (req, res) => {
  const { cart } = req.body;
  const { id } = req.user;
  validateMongoDbId(id);

  try {
    let products = [];
    const user = await User.findById(id);
    //check if user has products in cart
    const productExists = await Cart.findOne({ orderedBy: user.id });

    if (productExists) {
      productExists.deleteOne();
    }

    for (let i = 0; i < cart.length; i++) {
      let object = {};
      object.product = cart[i].id;
      object.count = cart[i].count;
      object.color = cart[i].color;

      let getPrice = await Product.findById(cart[i].id).select("price").exec();
      object.price = getPrice.price;
      products.push(object);
    }

    let cartTotal = 0;
    for (let i = 0; i < products.length; i++) {
      cartTotal += products[i].price * products[i].count;
    }

    let newCart = await new Cart({
      products,
      cartTotal,
      orderedBy: user.id,
    }).save();
    res.json(newCart);
  } catch (error) {
    throw new Error(error);
  }
});

//get user cart
export const getUserCart = asyncHandler(async (req, res) => {
  const { id } = req.user;
  validateMongoDbId(id);

  try {
    const cart = await Cart.findOne({ orderedBy: id }).populate(
      "products.product"
    );
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});

//apply Coupon
export const applyCoupon = asyncHandler(async (req, res) => {
  const { coupon } = req.body; 
  const { id } = req.user;
  validateMongoDbId(id);

  const validCoupon = await Coupon.findOne({ name: coupon }).exec();

  console.log("coupon :",coupon);
  console.log('validCoupon: ',validCoupon);

  if (validCoupon === null) {
    throw new Error("Invaild coupon");
  }

   const user = await User.findById(id);
  let { cartTotal } = await Cart.findOne({
    orderedBy: id,
  }).populate("products.product");

  let totalAfterDiscount = (
    cartTotal -
    (cartTotal * validCoupon.discount) / 100
  ).toFixed(2);

  await Cart.findOneAndUpdate(
    { orderedBy: user.id },
    { cartTotal: totalAfterDiscount },
    { new: true }
  );

  res.json(totalAfterDiscount);
});

//emptyCart
export const emptyCart = asyncHandler(async (req, res) => {
  const { id } = req.user;
  validateMongoDbId(id);

  try {
    const user = await User.findOne({ id });
    const cart = await Cart.findOneAndDelete({ orderedBy: id });
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});



//get all users
export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  if (users) {
    res.json(users);
  } else {
    throw new Error("No users found");
  }
});

//get a user
export const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (user) {
    res.status(200).json(user);
  } else {
    throw new Error("No user found");
  }
});

//update a user
export const updateUser = asyncHandler(async (req, res) => {
  // const user = await User.findById(req.params.id);
  const { id, password } = req.user;
  //console.log('req.user: ',id , 'req.user: ',password);
  //console.log("USER", id);
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: req.body.password,
          isAdmin: req.body.isAdmin,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    throw new Error(error);
  }
});

//delete a user
export const deleteUser = asyncHandler(async (req, res) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  if (deletedUser) {
    res.status(200).json(deletedUser);
  } else {
    throw new Error("No user found");
  }
});

//logout
export const logout = asyncHandler(async (req, res, next) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "user logged out" });
});

//update password
export const updatePassword = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const { password } = req.body;
  validateMongoDbId(id);
  const user = await User.findById(id);
  if (password) {
    user.password = password;
    const updatedPassword = await user.save();
    res.json(updatedPassword);
  } else {
    res.json(user);
  }
  console.log(password);
});

//forgot password token
//Recently, google and yahoo have stop their smtp services,
export const forgotPasswordToken = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found with this email");
  try {
    const token = await user.createPasswordResetToken();
    await user.save();
    const resetUrl = `Please follow the link to reset password. <a href='http:localhost:2323/api/user/forgotPassword/${token}>Click here</a>`;
    const data = {
      to: email,
      text: "Hey",
      subject: "Forgot Password",
      html: resetUrl,
    };
    sendEmail(data);
    res.json(token);
  } catch (error) {
    throw new Error(error.message);
  }
});

//resetPassword
export const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const token = req.params;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) throw new Error("Token expired, Please try again later");
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  res.json(user);
});
