const fs = require("fs");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const youthModel = require("../models/youthModel");
const convoModel = require("../models/convoModel");

const agentData = fs.readFile(
  `${__dirname}../../data/agentData.json`,
  "utf-8",
  (err, data) => {
    if (err) return "error";
    console.log("what thr heck", data);
  }
);

console.log("?", agentData);
// get a specific youth 'GET'
module.exports.getYouth = async (req, res, next) => {
  res.status(200).json({
    status: "success   yay! ",
    result: youth.length,
    data: {
      agentData,
    },
  });
};

//get all youth 'GET'
module.exports.getAllYouth = async (req, res, next) => {
  res.status(200).json({
    status: "success   yay! ",
    result: youth.length,
    data: {
      agentData,
    },
  });
};

//create convo post create new conversation 'POST'
module.exports.createConvo = async (req, res) => {
  const body = req.body;
  const convo = {
    session: {
      sessionId: body.sessionId,
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
//Create Youth 'POST'
module.exports.createYouth = async (req, res) => {
  const youth = [];
  res.status(201).json({
    status: " Post ran Successfully youth Added",
    result: youth.length,
    data: youth,
  });
};

//UPDATE YOUTH PUT OBJECT
module.exports.UpdateYouth = async (req, res) => {
  res.send("Aweya ndithe gqi kwa control");
};

//DELETE YOUTH 'DELETE'
module.exports.deleteYouth = async (req, res) => {
  res.send("Aweya ndithe gqi kwa control");
};
