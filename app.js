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
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://amabe-env.eba-5iepkthj.us-east-1.elasticbeanstalk.com/login");
    next();
});
app.use(express.json());

app.post("/signup", authController.signup);
app.post("/login", authController.login);

registerYouthLogic(app);
registerTeamLeaderLogic(app);
registerConvoLogic(app);
registerAgentLogic(app);
registerQALogic(app);
registerUserLogic(app);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("App running on port", port);
});
