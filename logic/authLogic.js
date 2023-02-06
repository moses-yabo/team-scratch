const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const mongoose = require("mongoose");

const signToken = (id) => {
  return jwt.sign({ id: id }, config.get("amathubaJwtPrivateKey"), {
    expiresIn: config.get("amathubaJwtExpiresIn"),
  });
};

exports.signup = async (req, res) => {
  try{
    const { firstName, lastName, email, password, role, passwordConfirm } =
        req.body;
    const newUser = await User.create({
      _id: new mongoose.Types.ObjectId(),
      firstName,
      lastName,
      email,
      password,
      role,
      passwordConfirm,
    });
    res.status(200).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  }catch (e) {
    res.status(500).json({
      status: "Unsuccessful",
      error: e.toString()
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new AppError("Please provide email and password", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError("Incorrect email or password", 401));
    }

    const token = signToken(user._id);
    res.status(200).json({
      status: "success",
      token,
      user
    });
  }catch (e) {
    res.status(500).json({
      status: "Unsuccessful",
      error: e.toString()
    });
  }

};

exports.protect = (req, res, next) => {
  next();
};
