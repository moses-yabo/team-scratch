const mongoose = require("mongoose");
const validate = require("validator");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
  },
  firstName: {
    type: String,
    required: [true, "Please tell us your firstName !"],
  },
  lastName: {
    type: String,
    required: [true, "Please tell us you lastName !"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validate.default.isEmail, "Please provise a valid email"],
  },
  role: {
    type: String,
    required: [true, "admin || agent || team Leader || quality assurance"],
    minlength: 5,
    maxlength: 25,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      // this only works on Create and Save !!!
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same",
    },
  },
});

userSchema.pre("save", async function (next) {
  //Only run this function if password was actually modified
  if (!this.isModified("password")) return next();
  //Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  //Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
const User = mongoose.model("User", userSchema);
module.exports = User;
