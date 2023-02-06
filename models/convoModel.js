const mongoose = require("mongoose");

const convoSchema = mongoose.Schema({
        _id: {
            type: mongoose.Types.ObjectId,
        },
        dialogue: {
            nameOfAgent: {
                type: String,
            },
            nameOfYouth: {
                type: String,
            },
            sessionId: {
                type: mongoose.Types.ObjectId,
            },
            date: {
                type: Date,
                default: Date.now(),
            },
        },
        convo_data: {
            openingQuestion1Red: {
                type: String,
            },
            openingQuestion2Red: {
                type: String,
            },
            openingQuestion1Blue: {
                type: String,
            },
            openingQuestion2Blue: {
                type: String,
            },
            keyAnswer1: {
                type: String,
            },
            keyAnswer2: {
                type: String,
            },
            keyAnswer3: {
                type: String,
            },
            keyAnswer4: {
                type: String,
            },
            keyAnswer5: {
                type: String,
            },
            keyAnswer6: {
                type: String,
            },
            keyAnswer7: {
                type: String,
            },
            keyAnswer8: {
                type: String,
            },
            keyAnswer9: {
                type: String,
            },
            keyAnswer10: {
                type: String,
            },
            keyAnswer11: {
                type: String,
            },
            keyAnswer12: {
                type: String,
            },
            keyAnswer13: {
                type: String,
            },
            keyAnswer14: {
                type: String,
            },
            newKeyAnswer1: {
                type: String,
            },
            newKeyAnswer2: {
                type: String,
            },
            newKeyAnswer3: {
                type: String,
            },
        },
        emotionOfCall: {
            type: String
        },
        ROQpossibleResponse: {
            type: String
        },
        BOQpossibleResponse: {
            type: String
        },
        followUpQuestions: {
            roqPromptQuestion: {
                type: String,
            },
            boqPromptQuestion: {
                type: String,
            },
            keyAnswer1: {
                type: String,
            },
            keyAnswer2: {
                type: String,
            },
            keyAnswer3: {
                type: String,
            },
            keyAnswer4: {
                type: String,
            },
            keyAnswer5: {
                type: String,
            },
            keyAnswer6: {
                type: String,
            },
            keyAnswer7: {
                type: String,
            },
            keyAnswer8: {
                type: String,
            },
            keyAnswer9: {
                type: String,
            },
            keyAnswer10: {
                type: String,
            },
            keyAnswer11: {
                type: String,
            },
            keyAnswer12: {
                type: String,
            },
            keyAnswer13: {
                type: String,
            },
            keyAnswer14: {
                type: String,
            },
            newKeyAnswer1: {
                type: String,
            },
            newKeyAnswer2: {
                type: String,
            },
            newKeyAnswer3: {
                type: String,
            },
        },
        youthOQ1: {
            type: String
        },
        youthOqReflectionData: {
            type: Object
        },
        youthOQ2: {
            type: String
        },
        youthOqReflectionData2: {
            type: Object
        },
        youthResponses: {
            type: String
        },
        youthFollow_UpQuestions: {
            type: String
        },
        youthFqReflectionData: {
            type: Object
        },
        youthPrompt_Questions: {
            type: String
        },
        youthPqReflectionData: {
            type: Object
        },
        agentQuestions: {
            type: String
        },
        agentData: {
            type: Array
        },
        newAppointment: {
            type: Date
        },
        redFlag: {
            type: Boolean
        },
    })
;

module.exports.Convo = mongoose.model("dialogue", convoSchema);
