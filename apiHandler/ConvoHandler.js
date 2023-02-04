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
                        date: body.dialogue.date,
                    },
                    psychosocialSupport: {
                        temp: body.psychosocialSupport.temp,
                        openingQuestion: body.psychosocialSupport.openingQuestion,
                        possibleReplies: body.psychosocialSupport.possibleReplies,
                        possibleResponseAgent: body.psychosocialSupport.possibleResponseAgent,
                        basedOnPossibleResp: {
                            followUpQtn: body.psychosocialSupport.basedOnPossibleResp.followUpQtn,
                            prompt: body.psychosocialSupport.basedOnPossibleResp.prompt,
                        },
                        basedOnPossibleResponse: body.psychosocialSupport.basedOnPossibleResponse,
                        basedOnPossibleReplies: {
                            followUpQtn: body.psychosocialSupport.basedOnPossibleReplies.followUpQtn,
                            prompt: body.psychosocialSupport.basedOnPossibleReplies.prompt,
                        },
                        youthReflection: body.psychosocialSupport.youthReflection,
                        agentReflection: {
                            possibleResponse: body.psychosocialSupport.possibleResponse,
                            followUpQtn: body.psychosocialSupport.followUpQtn,
                            prompt: body.psychosocialSupport.prompt,
                        },
                    },
                };
                val = await Convo.findOneAndUpdate(query, newValues, {rawResult: true});
            } else {
                let convo = new Convo({
                    _id: new mongoose.Types.ObjectId(),
                    dialogue: {
                        nameOfAgent: body.dialogue.nameOfAgent,
                        nameOfYouth: body.dialogue.nameOfYouth,
                        sessionId: new mongoose.Types.ObjectId(),
                        date: body.dialogue.date,
                    },
                    psychosocialSupport: {
                        temp: body.psychosocialSupport.temp,
                        openingQuestion: body.psychosocialSupport.openingQuestion,
                        possibleReplies: body.psychosocialSupport.possibleReplies,
                        possibleResponseAgent: body.psychosocialSupport.possibleResponseAgent,
                        basedOnPossibleResp: {
                            followUpQtn: body.psychosocialSupport.basedOnPossibleResp.followUpQtn,
                            prompt: body.psychosocialSupport.basedOnPossibleResp.prompt,
                        },
                        basedOnPossibleResponse: body.psychosocialSupport.basedOnPossibleResponse,
                        basedOnPossibleReplies: {
                            followUpQtn: body.psychosocialSupport.basedOnPossibleReplies.followUpQtn,
                            prompt: body.psychosocialSupport.basedOnPossibleReplies.prompt,
                        },
                        youthReflection: body.psychosocialSupport.youthReflection,
                        agentReflection: {
                            possibleResponse: body.psychosocialSupport.possibleResponse,
                            followUpQtn: body.psychosocialSupport.followUpQtn,
                            prompt: body.psychosocialSupport.prompt,
                        },
                    },
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
