const mongoose = require("mongoose");
const validate = require("validator");

const youthSchema = mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
  },

  firstName: {
    type: String,
    required: [true, "Please tell us your firstName !"],
    min: 4,
    max: 13,
  },
  lastName: {
    type: String,
    required: [true, "Please tell us you lastName !"],
    min: 4,
    max: 13,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validate.default.isEmail, "Please provise a valid email"],
  },
  hostedAt: {
    type: String,
    required: [true, "Please tell us where are you hosted ?"],
    min: 5,
    max: 23,
  },
});

exports.youth = mongoose.model("Youth", youthSchema);
