const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const AppError = require("../utils/appError");

const signToken = (id) => {
  return jwt.sign({ id: id }, config.get("amathubaJwtPrivateKey"), {
    expiresIn: config.get("amathubaJwtExpiresIn"),
  });
};

exports.signup = async (req, res) => {
  const { firstName, lastName, email, password, role, passwordConfirm } =
    req.body;
  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password,
    role,
    passwordConfirm,
  });
  const token = signToken(newUser._id);
  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });
  console.log(req.body);
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  //1) Check if email and password exist
  if (!email || !password) {
    return next(new AppError("Please provide email and password oyin", 400));
  }
  //2) Check if user exist && password is correct
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }
  //3) If everything ok , send to client
  const token = signToken(user._id);
  res.status(200).json({
    status: "success",
    token,
  });
  console.log(req.body);
};

exports.signout = async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    status: "succes",
    data: {
      user: newUser,
    },
  });
};

exports.protect = (req, res, next) => {
  next();
};
