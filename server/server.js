const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3001;
const DB = process.env.MONGO_URI;
mongoose
  .connect(DB)
  .then(() => {
    console.log("database connected succesefully");
  })
  .catch((err) => {
    console.log("failed to connect databse: ", err.message);
  });
const authRouter = require("./routes/auth.router");
const jobRouter = require("./routes/jobs.routes");
const applyRouter = require("./routes/apply.routes");
app.use("/api", authRouter);
app.use("/api", jobRouter);
app.use("/api", applyRouter);
app.get("/", (req, res) => {
  return res.status(200).send("ok server");
});
app.listen(PORT, () => {
  console.log("server listening on port : ", PORT);
});
