const { apply } = require("../controller/apply.controller");

const express = require("express");
const router = express.Router();
router.post("/apply", apply);

module.exports = router;
