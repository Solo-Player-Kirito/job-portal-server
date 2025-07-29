const {
  addJob,
  getAllJobs,
  getJobById,
} = require("../controller/jobs.controller");
const authenticateToken = require("../middleware/auth");
const express = require("express");
const router = express.Router();
router.post("/job/add", authenticateToken, addJob);
router.get("/jobs", getAllJobs);
router.get("/job", getJobById);
module.exports = router;
