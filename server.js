const authController = require("./logic/authLogic");

module.exports = (app) => {
    app.use("/conversation", convoRoutes) ? null : undefined;
    app.use("/quality-assurance", qARoutes) ? null : undefined;
    app.use("/team-leader", teamLeaderRoutes) ? null : undefined;
    app.use("/youth", youthRoutes) ? null : undefined;
    app.use("/super-admin-user", superAdminRoutes) ? null : undefined;
    app.use("/admin-routes", adminRoutes) ? null : undefined;
};

module.exports = (app) => {
  app.get("/api/v1/amathuba", async (req, res) => {
    res.status(200).json({ status: "success", data: dialogue });
  });
  app.post("/api/signup", authController.signup);
  app.post("/api/login", authController.login);
};

const youthRoutes = require("./routes/youthRoutes");
const QaRoutes = require("./routes/QaRoutes");
const teamLeaderRoutes = require("./routes/teamLeaderRoutes");
const convoRoutes = require("./routes/ConvoRoutes");
const adminRoutes = require("./routes/admin");
const superAdminRoutes = require("./routes/SuperAdmin");
