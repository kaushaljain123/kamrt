const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    enum: ["user", "vendor"],
    default: "user",
  },
  password: {
    type: String,
    require: true,
    select: true,
  },
});

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// bcrypt password
userSchema.methods.matchPassword = async function (eneterPassword) {
  return await bcrypt.compare(eneterPassword, this.password);
};

// Generate Token from JWT
userSchema.methods.getSignToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
