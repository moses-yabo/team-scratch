const fs = require("fs");
exports.getConvoData = async (req, res) => {
  const conversationData = fs.readFile(
    `${__dirname}/data/ConvoData.json`,
    "utf-8",
    (err) => {
      console.log(err);
    }
  );

  try {
    res.status(200).json({
      status: "success",
      data: agentData,
      result: agentData,
    });
  } catch (error) {
    if (!res.status(200) && error) {
      res.status(500).json({
        status: "failed",
        message: error.message,
      });
    }
  }
};

module.exports.getConvos = async (req, res) => {
  try {
    res.status(200).json({
      status: "succesful",
      data: agentData[0],
      result: agentData.length,
    });
  } catch (error) {
    if (!res.status(200) && error) {
      res.status(500).json({
        status: "failed",
        message: error.message,
      });
    }
  }
};
module.exports.postQuestiontoBeAdded = async (req, res) => {
  try {
    res.status(200).json({
      status: "succesful",
      data: agentData[0],
      result: agentData.length,
    });
  } catch (error) {
    if (!res.status(200) && error) {
      res.status(500).json({
        status: "failed",
        message: error.message,
      });
    }
  }
};
module.exports.postQuestionstoBeAdded = async (req, res) => {
  try {
    res.status(200).json({
      status: "succesful",
      data: agentData[0],
      result: agentData.length,
    });
  } catch (error) {
    if (!res.status(200) && error) {
      res.status(500).json({
        status: "failed",
        message: error.message,
      });
    }
  }
};

module.exports.QuestionstoBeUpdated = async (req, res) => {
  try {
    res.status(200).json({
      status: "succesful",
      data: agentData[0],
      result: agentData.length,
    });
  } catch (error) {
    if (!res.status(200) && error) {
      res.status(500).json({
        status: "failed",
        message: error.message,
      });
    }
  }
};

module.exports.QuestionstoBeDeleted = async (req, res) => {
  try {
    res.status(200).json({
      status: "succesful",
      data: agentData[0],
      result: agentData.length,
    });
  } catch (error) {
    if (!res.status(200) && error) {
      res.status(500).json({
        status: "failed",
        message: error.message,
      });
    }
  }
};
