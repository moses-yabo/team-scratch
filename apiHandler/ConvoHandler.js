const mongoose = require("mongoose");
const {Convo} = require("../models/convoModel");

module.exports.registerConvoLogic = (app) => {
    app.get("/chatYouth", getAllConvos);
    app.get("/chatYouth/:id", getAllConvosByID);
    app.post("/chatYouth", upsertConvo);
    app.delete("/chatYouth/:id", deleteConvo);
}

const getAllConvos = async (req, res) => {
    try {
        const filter = {};
        const all = await Convo.find(filter);
        res.status(200).json({
            status: "Success",
            result_size: all.length,
            data: {
                all,
            },
        });
    } catch (e) {
        res.status(500).json({
            status: "Unsuccessful",
            error: e.toString()
        });
    }
};

const getAllConvosByID = async (req, res) => {
    try {
        let id = mongoose.Types.ObjectId(req.params.id)
        let convo = await Convo.findById({_id: id});
        res.status(200).json({
            status: "Success",
            result_size: convo.length,
            data: {
                convo,
            },
        });
    } catch (e) {
        res.status(500).json({
            status: "Unsuccessful",
            error: e.toString()
        });
    }
};

const upsertConvo = async (req, res) => {
    try {
        const body = req.body;
        let val;
        Convo.countDocuments({_id: body._id}, async function (err, count) {
            if (count > 0) {
                let query = {_id: body._id};
                let newValues = {
                    dialogue: {
                        nameOfAgent: body.dialogue.nameOfAgent,
                        nameOfYouth: body.dialogue.nameOfYouth,
                    },
                    convo_data: {
                        openingQuestion1Red: body.convo_data.openingQuestion1Red,
                        openingQuestion2Red: body.convo_data.openingQuestion2Red,
                        openingQuestion1Blue: body.convo_data.openingQuestion1Blue,
                        openingQuestion2Blue: body.convo_data.openingQuestion2Blue,
                        keyAnswer1: body.convo_data.keyAnswer1,
                        keyAnswer2: body.convo_data.keyAnswer2,
                        keyAnswer3: body.convo_data.keyAnswer3,
                        keyAnswer4: body.convo_data.keyAnswer4,
                        keyAnswer5: body.convo_data.keyAnswer5,
                        keyAnswer6: body.convo_data.keyAnswer6,
                        keyAnswer7: body.convo_data.keyAnswer7,
                        keyAnswer8: body.convo_data.keyAnswer8,
                        keyAnswer9: body.convo_data.keyAnswer9,
                        keyAnswer10: body.convo_data.keyAnswer10,
                        keyAnswer11: body.convo_data.keyAnswer11,
                        keyAnswer12: body.convo_data.keyAnswer12,
                        keyAnswer13: body.convo_data.keyAnswer13,
                        keyAnswer14: body.convo_data.keyAnswer14,
                        newKeyAnswer1: body.convo_data.newKeyAnswer1,
                        newKeyAnswer2: body.convo_data.newKeyAnswer2,
                        newKeyAnswer3: body.convo_data.newKeyAnswer3,
                    },
                    emotionOfCall: body.emotionOfCall,
                    ROQpossibleResponse: body.ROQpossibleResponse,
                    BOQpossibleResponse: body.BOQpossibleResponse,
                    followUpQuestions: {
                        roqPromptQuestion: body.followUpQuestions.roqPromptQuestion,
                        boqPromptQuestion: body.followUpQuestions.boqPromptQuestion,
                        keyAnswer1: body.followUpQuestions.keyAnswer1,
                        keyAnswer2: body.followUpQuestions.keyAnswer2,
                        keyAnswer3: body.followUpQuestions.keyAnswer3,
                        keyAnswer4: body.followUpQuestions.keyAnswer4,
                        keyAnswer5: body.followUpQuestions.keyAnswer5,
                        keyAnswer6: body.followUpQuestions.keyAnswer6,
                        keyAnswer7: body.followUpQuestions.keyAnswer7,
                        keyAnswer8: body.followUpQuestions.keyAnswer8,
                        keyAnswer9: body.followUpQuestions.keyAnswer9,
                        keyAnswer10: body.followUpQuestions.keyAnswer10,
                        keyAnswer11: body.followUpQuestions.keyAnswer11,
                        keyAnswer12: body.followUpQuestions.keyAnswer12,
                        keyAnswer13: body.followUpQuestions.keyAnswer13,
                        keyAnswer14: body.followUpQuestions.keyAnswer14,
                        newKeyAnswer1: body.followUpQuestions.newKeyAnswer1,
                        newKeyAnswer2: body.followUpQuestions.newKeyAnswer2,
                        newKeyAnswer3: body.followUpQuestions.newKeyAnswer3,
                    },
                    youthOQ1: body.youthOQ1,
                    youthOqReflectionData: body.youthOqReflectionData,
                    youthOQ2: body.youthOQ2,
                    youthOqReflectionData2: body.youthOqReflectionData2,
                    youthResponses: body.youthResponses,
                    youthFollow_UpQuestions: body.youthFollow_UpQuestions,
                    youthFqReflectionData: body.youthFqReflectionData,
                    youthPrompt_Questions: body.youthPrompt_Questions,
                    youthPqReflectionData: body.youthPqReflectionData,
                    agentQuestions: body.agentQuestions,
                    agentData: body.agentData,
                    newAppointment: new Date(body.newAppointment),
                    redFlag: body.redFlag,
                };
                val = await Convo.findOneAndUpdate(query, newValues, {rawResult: true});
            } else {
                let convo = new Convo({
                    _id: new mongoose.Types.ObjectId(),
                    dialogue: {
                        nameOfAgent: body.dialogue.nameOfAgent,
                        nameOfYouth: body.dialogue.nameOfYouth,
                    },
                    convo_data: {
                        openingQuestion1Red: body.convo_data.openingQuestion1Red,
                        openingQuestion2Red: body.convo_data.openingQuestion2Red,
                        openingQuestion1Blue: body.convo_data.openingQuestion1Blue,
                        openingQuestion2Blue: body.convo_data.openingQuestion2Blue,
                        keyAnswer1: body.convo_data.keyAnswer1,
                        keyAnswer2: body.convo_data.keyAnswer2,
                        keyAnswer3: body.convo_data.keyAnswer3,
                        keyAnswer4: body.convo_data.keyAnswer4,
                        keyAnswer5: body.convo_data.keyAnswer5,
                        keyAnswer6: body.convo_data.keyAnswer6,
                        keyAnswer7: body.convo_data.keyAnswer7,
                        keyAnswer8: body.convo_data.keyAnswer8,
                        keyAnswer9: body.convo_data.keyAnswer9,
                        keyAnswer10: body.convo_data.keyAnswer10,
                        keyAnswer11: body.convo_data.keyAnswer11,
                        keyAnswer12: body.convo_data.keyAnswer12,
                        keyAnswer13: body.convo_data.keyAnswer13,
                        keyAnswer14: body.convo_data.keyAnswer14,
                        newKeyAnswer1: body.convo_data.newKeyAnswer1,
                        newKeyAnswer2: body.convo_data.newKeyAnswer2,
                        newKeyAnswer3: body.convo_data.newKeyAnswer3,
                    },
                    emotionOfCall: body.emotionOfCall,
                    ROQpossibleResponse: body.ROQpossibleResponse,
                    BOQpossibleResponse: body.BOQpossibleResponse,
                    followUpQuestions: {
                        roqPromptQuestion: body.followUpQuestions.roqPromptQuestion,
                        boqPromptQuestion: body.followUpQuestions.boqPromptQuestion,
                        keyAnswer1: body.followUpQuestions.keyAnswer1,
                        keyAnswer2: body.followUpQuestions.keyAnswer2,
                        keyAnswer3: body.followUpQuestions.keyAnswer3,
                        keyAnswer4: body.followUpQuestions.keyAnswer4,
                        keyAnswer5: body.followUpQuestions.keyAnswer5,
                        keyAnswer6: body.followUpQuestions.keyAnswer6,
                        keyAnswer7: body.followUpQuestions.keyAnswer7,
                        keyAnswer8: body.followUpQuestions.keyAnswer8,
                        keyAnswer9: body.followUpQuestions.keyAnswer9,
                        keyAnswer10: body.followUpQuestions.keyAnswer10,
                        keyAnswer11: body.followUpQuestions.keyAnswer11,
                        keyAnswer12: body.followUpQuestions.keyAnswer12,
                        keyAnswer13: body.followUpQuestions.keyAnswer13,
                        keyAnswer14: body.followUpQuestions.keyAnswer14,
                        newKeyAnswer1: body.followUpQuestions.newKeyAnswer1,
                        newKeyAnswer2: body.followUpQuestions.newKeyAnswer2,
                        newKeyAnswer3: body.followUpQuestions.newKeyAnswer3,
                    },
                    youthOQ1: body.youthOQ1,
                    youthOqReflectionData: body.youthOqReflectionData,
                    youthOQ2: body.youthOQ2,
                    youthOqReflectionData2: body.youthOqReflectionData2,
                    youthResponses: body.youthResponses,
                    youthFollow_UpQuestions: body.youthFollow_UpQuestions,
                    youthFqReflectionData: body.youthFqReflectionData,
                    youthPrompt_Questions: body.youthPrompt_Questions,
                    youthPqReflectionData: body.youthPqReflectionData,
                    agentQuestions: body.agentQuestions,
                    agentData: body.agentData,
                    newAppointment: new Date(body.newAppointment),
                    redFlag: body.redFlag,
                });

                val = await convo.save();
            }

            res.status(200).json({
                status: "Conversation dialogue successfully added",
                result_size: val.length,
                data: val,
            });
        });
    } catch (e) {
        res.status(500).json({
            status: "Unsuccessful",
            error: e.toString()
        });
    }
};
const deleteConvo = async (req, res) => {
    try {
        let id = mongoose.Types.ObjectId(req.params.id)
        let convo = await Convo.deleteOne({_id: id});
        res.status(200).json({
            status: "Conversation dialogue deleted successfully",
            result_size: convo.length,
            data: convo,
        });
    } catch (e) {
        res.status(500).json({
            status: "Unsuccessful",
            error: e.toString()
        });
    }
};
