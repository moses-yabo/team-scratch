const mongoose = require("mongoose");

const convoSchema = mongoose.Schema({
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
  psychosocialSupport: {
    temp: {
      type: String,
    },
    openingQuestion: {
      type: String,
    },
    possibleReplies: {
      type: String,
    },
    possibleResponseAgent: {
      type: String,
    },
    basedOnPossibleResp: {
      followUpQtn: {
        type: String,
      },
      prompt: {
        type: String,
      },
    },
    basedOnPossibleResponse: {
      type: String,
    },
    basedOnPossibleReplies: {
      followUpQtn: {
        type: String,
      },
      prompt: {
        type: String,
      },
    },
    youthReflection: {
      type: String,
    },
    agentReflection: {
      possibleResponse: {
        type: String,
      },
      followUpQtn: {
        type: String,
      },
      prompt: {
        type: String,
      },
    },
  },
});

module.exports.Convo = mongoose.model("dialogue", convoSchema);
