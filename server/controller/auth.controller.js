const { register, login } = require("../services/auth");

module.exports = {
  register: async (req, res) => {
    try {
      const { name, email, phone, password, type } = req.body;

      if (!phone || !password) {
        return res
          .status(400)
          .json({ error: "Phone and password are required" });
      }

      const result = await register({ name, email, phone, password, type });
      return res.status(201).json(result);
    } catch (err) {
      console.error("Register error:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  login: async (req, res) => {
    try {
      const { phone, password } = req.body;

      if (!phone || !password) {
        return res
          .status(400)
          .json({ error: "Phone and password are required" });
      }

      const result = await login({ phone, password });
      return res.status(200).json(result);
    } catch (err) {
      console.error("Login error:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
};
