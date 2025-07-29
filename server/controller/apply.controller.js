const { apply } = require("../services/apply.server");

module.exports = {
  apply: async (req, res) => {
    try {
      const { name, email, phone } = req.body;
      if (!name || !email || !phone) {
        return res.status(400).send("missing required fields");
      }
      const result = await apply({ name, email, phone });
      return res.status(200).json(result);
    } catch (err) {
      console.log("error while applying the job: ", err);
      return res.status(500).send("internal_server_error");
    }
  },
};
