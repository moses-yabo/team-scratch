const express = require("express");
const fs = require("fs");

const agentController = require("../controllers/AgentHandler");
const authController = require("../controllers/authController");
const router = express.Router();
const { log } = console;

//   var dialogue = JSON.parse(
//     fs.readFileSync(`${__dirname}/../data/agentData.json`)
//   );
//   console.log(dialogue);

router
  .route("/youth")
  .get(agentController.getAllYouth)
  .post(agentController.createYouth);

router
  .get("/youth/:id", agentController.getYouth)
  .put(agentController.UpdateYouth)
  .delete(agentController.deleteYouth);

module.exports = router;
