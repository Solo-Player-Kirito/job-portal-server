const { userModel } = require("../models/auth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwt_secret = "I_am_full_a_stack_developer";

async function register({ name, email, phone, password, type }) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    name,
    email,
    phone,
    password: hashedPassword,
    type,
  });
  const token = jwt.sign(
    { id: user._id, type: user.type, name: user.name },
    jwt_secret,
    { expiresIn: "3d" }
  );

  return { info: "register ok", token, user };
}

async function login({ phone, password, type }) {
  const user = await userModel.findOne({ phone });
  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  // Generate JWT token
  const token = jwt.sign(
    { id: user._id, type: user.type, name: user.name },
    jwt_secret,
    { expiresIn: "3d" }
  );

  return {
    message: "Login successful",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      type: user.type,
    },
  };
}

module.exports = {
  register,
  login,
};
