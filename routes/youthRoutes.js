const express = require("express");
const app = express();
const {
  getAllYouth,
  postAllYouth,
  postYouth,
  baseRequest,
} = require("../controllers/AgentHandler");

app.get("/youth", (req, res) => {
  log("ola");
  res.send("hi");
});
