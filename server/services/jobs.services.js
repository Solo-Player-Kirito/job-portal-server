const { jobModel } = require("../models/jobs.model");

async function addJob({ title, company, type, location, description }) {
  const result = await jobModel.create({
    title,
    company,
    type,
    location,
    description,
  });
  return result;
}
async function getAllJobs() {
  const result = await jobModel.find();
  return result;
}
async function getJobById(id) {
  const result = await jobModel.findById(id);
  return result;
}
module.exports = {
  addJob,
  getAllJobs,
  getJobById,
};
