const Youth = require("./../models/youthModel.js");
const mongoose = require("mongoose");

module.exports.registerYouthLogic = (app) => {
    app.get("/youth", getAllYouth);
    app.get("/youth/:id", getYouthByID);
    app.post("/youth", UpsertYouth);
    app.delete("/youth/:id", deleteYouthByID);
}

const getYouthByID = async (req, res) => {
    try {
        let id = mongoose.Types.ObjectId(req.params.id)
        let youth = await Youth.findById({_id: id});
        res.status(200).json({
            status: "Success",
            result_size: youth.length,
            data: {
                youth,
            },
        });
    } catch (e) {
        res.status(500).json({
            status: "Unsuccessful",
            error: e.toString()
        });
    }
};


const getAllYouth = async (req, res) => {
    try {
        const filter = {};
        const all = await Youth.find(filter);
        res.status(200).json({
            status: "success   yay! ",
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


const UpsertYouth = async (req, res) => {
    try {
        const body = req.body;
        let val;

        Youth.countDocuments({email: body.email}, async function (err, count) {
            if (count > 0) {
                let query = {email: body.email};
                let newValues = {
                    firstName: body.firstName,
                    lastName: body.lastName,
                    email: body.email,
                    hostedAt: body.hostedAt

                };
                val = await Youth.findOneAndUpdate(query, newValues, {rawResult: true});
            } else {
                let youth = new Youth({
                    _id: new mongoose.Types.ObjectId(),
                    firstName: body.firstName,
                    lastName: body.lastName,
                    email: body.email,
                    hostedAt: body.hostedAt
                });

                val = await youth.save();
            }

            res.status(200).json({
                status: "Youth successfully added",
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


const deleteYouthByID = async (req, res) => {
    try {
        let id = mongoose.Types.ObjectId(req.params.id)
        let youth = await Youth.deleteOne({_id: id});
        res.status(200).json({
            status: "Youth deleted successfully",
            result_size: youth.length,
            data: youth,
        });
    } catch (e) {
        res.status(500).json({
            status: "Unsuccessful",
            error: e.toString()
        });
    }
};
