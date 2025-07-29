const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    password: String,
    type: {
      type: String,
      enum: ["employee", "employer"],
      default: "employee",
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);
module.exports = { userModel };
