const express = require("express");
const app = express();
const cors = require('cors')
const authController = require("./logic/authLogic");
const {registerUserLogic} = require("./apiHandler/UserHandler");
const {registerQALogic} = require("./apiHandler/QaHandler");
const {registerAgentLogic} = require("./apiHandler/AgentsHandler");
const {registerConvoLogic} = require("./apiHandler/ConvoHandler");
const {registerTeamLeaderLogic} = require("./apiHandler/TeamLeaderHandler");
const {registerYouthLogic} = require("./apiHandler/YouthHandler");
require("./db/db")();


app.use(cors());
app.use(express.json());

app.post("/signup", authController.signup);
app.post("/login", authController.login);

registerYouthLogic(app);
registerTeamLeaderLogic(app);
registerConvoLogic(app);
registerAgentLogic(app);
registerQALogic(app);
registerUserLogic(app);

const port = process.env.PORT || 1998;
app.listen(port, () => {
    console.log("App running on port", port);
});
