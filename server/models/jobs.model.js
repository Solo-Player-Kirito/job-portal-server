const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema(
  {
    title: String,
    company: String,
    type: String,
    location: String,
    description: String,
    postedOn: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

const jobModel = mongoose.model("jobs", jobSchema);
module.exports = {
  jobModel,
};
