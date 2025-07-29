const { applyModel } = require("../models/apply.model");
async function apply({ name, email, phone }) {
  const result = await applyModel.create({
    name: name,
    email: email,
    phone: phone,
  });
  return result;
}

module.exports = {
  apply,
};
