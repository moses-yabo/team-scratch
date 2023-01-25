module.exports.getConversation = (req, res) => {
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
module.exports.getAllConversation = (req, res) => {
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
