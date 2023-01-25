const mongoose = require("mongoose");

const convoSchema = mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
  },
  youthName: {
    type: String,
    required: [true, "youth name is undefined"],
  },
  agentName: {
    type: String,
    required: [true, "agent name is undefined"],
  },
  psychosocialExchange: {
    type: Object,
    required: [true, "agent name is undefined"],
  },
  callType: {
    type: String,
    min: 4,
    max: 15,
  },
  date: {
    type: Date,
    default: Date.now(),
    required: [true, "agent name is undefined"],
  },
});
exports.convo = mongoose.model("dialogue", convoSchema);
