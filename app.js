const morgan = require("morgan");
const express = require("express");
const app = express();
const authController = require("./controllers/authController");
require("./db/db")();
require("./server")(app);
app.use(express.json());

app.post("/signup", authController.signup);
app.post("/login", authController.login);
const port = process.env.PORT || 1998;
app.listen(port, () => {
  console.log("App running on port", port);
});
