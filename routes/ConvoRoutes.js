const express = require("express");
const router = express.Router();
const {
  getAllYouth,
  postAllYouth,
  postYouth,
} = require("../controllers/AgentHandler");
const { put } = require("./agentRoutes");

router.route("/chatYouth").get().post();
router.route("/chatYouth/:id").get().post().put().patch().delete();

// (req, res) => {
//     // console.log(req.body);
//     const newId = dialogue[dialogue.length - 1];
//     const newConvo = Object.assign(
//       {
//         id: newId,
//       },
//       req.body
//     );
//     dialogue.push(newConvo);
//     fs.writeFile(
//       `${__dirname}/data/agentData.json`,
//       JSON.stringify(dialogue),
//       (err) => {
//         res.status(201).json({
//           status: "success",
//           data: {
//             convo: dialogue,
//           },
//         });
//       }
//     );
//   }
