const { route } = require("../server").app;
const {
  getAllYouth,
  postAllYouth,
  postYouth,
} = require("../controllers/AgentHandler");

route("/").get().post();
