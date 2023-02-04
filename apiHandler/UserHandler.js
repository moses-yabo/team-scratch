const User = require("../models/userModel");
const mongoose = require("mongoose");
module.exports.registerUserLogic = (app) => {
    app.get("/user", getAllUser);
    app.get("/user/:id", getUserByID);
    app.post("/user/:id", upsertUser);
    app.delete("/user/:id", deleteUserById);
}


const getAllUser = async (req, res) => {
    try {
        const filter = {};
        const all = await User.find(filter);
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

const getUserByID = async (req, res) => {
    try {
        let id = mongoose.Types.ObjectId(req.params.id)
        let user = await User.findById({_id: id});
        res.status(200).json({
            status: "Success",
            result_size: user.length,
            data: {
                user,
            },
        });
    } catch (e) {
        res.status(500).json({
            status: "Unsuccessful",
            error: e.toString()
        });
    }
};


const upsertUser = async (req, res) => {
    try {
        const body = req.body;
        let val;

        User.countDocuments({email: body.email}, async function (err, count) {
            if (count > 0) {
                let query = {email: body.email};
                let newValues = {
                    firstName: body.firstName,
                    lastName: body.lastName,
                    email: body.email,
                    hostedAt: body.hostedAt,
                    role: body.role,
                    password: body.password,
                    passwordConfirm: body.passwordConfirm,

                };
                val = await User.findOneAndUpdate(query, newValues, {rawResult: true});
            } else {
                let user = new User({
                    _id: new mongoose.Types.ObjectId(),
                    firstName: body.firstName,
                    lastName: body.lastName,
                    email: body.email,
                    hostedAt: body.hostedAt,
                    role: body.role,
                    password: body.password,
                    passwordConfirm: body.passwordConfirm,
                });

                val = await user.save();
            }

            res.status(200).json({
                status: "User successfully added",
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

const deleteUserById = async (req, res) => {
    try {
        let id = mongoose.Types.ObjectId(req.params.id)
        let youth = await User.deleteOne({_id: id});
        res.status(200).json({
            status: "User deleted successfully",
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
