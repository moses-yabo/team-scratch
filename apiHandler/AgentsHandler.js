module.exports.registerAgentLogic = (app) => {
  app.get("/admin-convo", getConversation);
  app.get("/all-admin-convo", getAllConversation);
}

const getConversation = (req, res) => {
  try {
    const currentAgent = Agents.find("_id", "name");
    res.status(200).json({
      status: "Success",
      currentAgent: currentAgent,
    });
  } catch (error) {
    if (!res.status(200) && error) {
      res.json({
        status: "fail",
        message: "Couldnt find a  logged in user",
      });
    }
  }
};

const getAllConversation = (req, res) => {
  try {
    const currentAgent = Agents.find("_id", "name");
    res.writeHead({
      "content-type": "application/json",
      "encoding-type": "utf-8",
    });
    res.status(200).json({
      status: "Success",
      currentAgent: currentAgent,
    });
  } catch (error) {
    if (!res.status(200) && error) {
      res.json({
        status: "fail",
        message: "Couldnt find a  logged in user",
      });
    }
  }
};
