module.exports.registerTeamLeaderLogic = (app) => {
  app.get("/youth", getAllYouth);
  app.post("/youth", createYouth);
  app.get("/youth/:id", getYouth);
  app.put("/youth/:id", UpdateYouth);
  app.delete("/youth/:id", deleteYouth);
}


const getYouth = async (req, res) => {
  res.status(200).json({
    status: "success   yay! ",
    result: youth.length,
    data: {
      agentData,
    },
  });
};


const getAllYouth = async (req, res) => {
  res.status(200).json({
    status: "success   yay! ",
    result: youth.length,
    data: {
      agentData,
    },
  });
};


const createYouth = async (req, res) => {
  const youth = [];
  res.status(201).json({
    status: " Post ran Successfully youth Added",
    result: youth.length,
    data: youth,
  });
};


const UpdateYouth = async (req, res) => {
  res.send("Aweya ndithe gqi kwa control");
};


const deleteYouth = async (req, res) => {
  res.send("Aweya ndithe gqi kwa control");
};
