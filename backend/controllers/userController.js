import { json } from "express";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../util/generateToken.js";

/*
    @desc   Authenticate Use & Get Token
    @route  POST /api/users/login
    @access Public 
*/
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (user) {
    if (await user.matchPassword(password)) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid Password");
    }
  } else {
    res.status(404);
    throw new Error("Invalid Email, User Not Found");
  }
});

/*
    @desc   Register New User
    @route  POST /api/users
    @access Public 
*/
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email: email });
  if (userExist) {
    res.status(400);
    throw new Error("User Already Exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
});

/*
    @desc   Get User Profile
    @route  GET /api/users/profile
    @access Protected 
*/
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("User Not Found");
  }
});

/*
    @desc   Update User Profile
    @route  PUT /api/users/profile
    @access Protected 
*/
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const userRes = req.body;
  if (user) {
    user.name = userRes.name || user.name;
    user.email = userRes.email || user.email;
    if (userRes.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(401);
    throw new Error("User Not Found");
  }
});
