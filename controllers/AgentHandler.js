const { readFileSync } = require("fs");
const User = require("../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

module.exports.getYouth = async (req, res, next) => {
  const youthId = req.param(["_id"]);
  res.status(200).json({
    status: "success   yay! ",
    result: youth.length,
    data: {
      youth,
    },
  });
};
module.exports.chatYouth = async (req, res) => {
  const body = req.body;
  const convo = {
    sessionId: body.sessionId,
    session: {
      agentName: body.agentName,
      youthName: body.youthName,
      date: body.date,
      reason: body.reason,
      redFlags: body.redFlags,
    },
    opening: body.opening,
    triggers: body.triggers,
    reaction: body.reaction,
    closing: body.closing,
    reflection: body.reflection,
    appointment: body.appointment,
  };
  const youth = [];
  res.status(201).json({
    status: " Post ran Successfully youth Added",
    result: youth.length,
    data: youth,
  });
};
module.exports.addYouth = async (req, res) => {
  const youth = [];
  res.status(201).json({
    status: " Post ran Successfully youth Added",
    result: youth.length,
    data: youth,
  });
};
module.exports.getAllYouth = async (req, res) => {
  res.send("Aweya ndithe gqi kwa control");
};
module.exports.UpdateYouth = async (req, res) => {
  res.send("Aweya ndithe gqi kwa control");
};
module.exports.deleteYouth = async (req, res) => {
  res.send("Aweya ndithe gqi kwa control");
};
