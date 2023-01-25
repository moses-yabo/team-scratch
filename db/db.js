const mongoose = require("mongoose");
const config = require("config");
const connectionString = config.get("db");

module.exports = () => {
  mongoose
    .connect(connectionString)
    .then(() => {
      console.log("connected to the Db");
    })
    .catch((err) => {
      console.log(err, "try Again there is  a bit of a problem !");
    });
};
