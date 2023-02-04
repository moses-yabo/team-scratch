module.exports.registerQALogic = (app) => {
  app.get("/quality-assurance", getAllQualityAssuranceData);
  app.post("/quality-assurance", upsertQualityAssuranceInfo);
  app.get("/quality-assurance/:id", getQualityAssuranceDataByID);
  app.delete("/quality-assurance/:id", deleteQualityAssuranceDataByID);
}



const getAllQualityAssuranceData = async (req, res) => {
  res.status(200).json({
    status: "Success",
    result: youth.length,
    data: {
      agentData,
    },
  });
};



const getQualityAssuranceDataByID = async (req, res) => {
  res.status(200).json({
    status: "success   yay! ",
    result: youth.length,
    data: {
      agentData,
    },
  });
};



const upsertQualityAssuranceInfo = async (req, res) => {
  const body = req.body;
  const convo = {
    session: {
      sessionId: body.sessionId,
      agentName: body.agentName,
      youthName: body.youthName,
      date: body.date,
      reason: body.reason,
      redFlags: body.redFlags,
    },
    opening: body.opening,
    triggers: body.triggers,
    reaction: body.reaction,
    closing: body.closing,
    reflection: body.reflection,
    appointment: body.appointment,
  };
  const youth = [];
  res.status(201).json({
    status: " Post ran Successfully youth Added",
    result: youth.length,
    data: youth,
  });
};



const deleteQualityAssuranceDataByID = async (req, res) => {
  const youth = [];
  res.status(201).json({
    status: " Post ran Successfully youth Added",
    result: youth.length,
    data: youth,
  });
};
