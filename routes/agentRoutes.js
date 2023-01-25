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
  .post(agentController.addYouth);

router
  .get("/youth/:id", agentController.getYouth)
  .put(agentController.UpdateYouth)
  .delete(agentController.deleteYouth);
// app.get("/api/v1/amathuba", async (req, res) => {
//   res.status(200).json({ status: "success" });
// });

module.exports = router;

//   app.post("/api/signup", authController.signup);
//   app.post("/api/login", authController.login);
