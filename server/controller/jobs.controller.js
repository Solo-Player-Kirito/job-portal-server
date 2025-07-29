const { addJob, getAllJobs, getJobById } = require("../services/jobs.services");

module.exports = {
  addJob: async (req, res) => {
    try {
      const { title, company, type, location, description } = req.body;
      if (!title || !company || !type || !location || !description) {
        return res.status(400).send("missing required fields");
      }
      const result = await addJob({
        title,
        company,
        type,
        location,
        description,
      });
      return res.status(200).json(result);
    } catch (err) {
      console.log("error while adding the job: ", err);
      return res.status(500).send("internal_server_error");
    }
  },
  getAllJobs: async (req, res) => {
    try {
      const result = await getAllJobs();
      return res.status(200).json(result);
    } catch (err) {
      console.log("error while fetching all jobs: ", err);
      return res.status(500).send("internal_server_error");
    }
  },
  getJobById: async (req, res) => {
    try {
      const { id } = req.query;
      const result = await getJobById(id);
      return res.status(200).json(result);
    } catch (err) {
      console.log("error while fetching single job: ", err);
      return res.status(500).send("internal_server_error");
    }
  },
};
