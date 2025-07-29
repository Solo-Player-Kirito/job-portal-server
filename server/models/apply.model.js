const mongoose = require("mongoose");

const applySchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
  },
  { timestamps: true }
);

const applyModel = mongoose.model("applies", applySchema);

module.exports = {
  applyModel,
};
