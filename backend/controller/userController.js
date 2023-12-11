import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import { generateToken } from "../config/generateToken.js";
import { refreshToken } from "../config/refreshToken.js";
import bcrypt from "bcrypt";

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
  const user = await User.findById(req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    throw new Error("No user found");
  }
});

//update a user
export const updateUser = asyncHandler(async (req, res) => {
  // const user = await User.findById(req.params.id);
  const { id } = req.user;
  
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
          isAdmin: req.body.isAdmin
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
