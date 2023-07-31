const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.json({
      status: false,
      message: "Not Authorize to access this page",
    });
  }

  try {
    // Verify Token
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = User.findById(decode.id);

    next();
  } catch (error) {
    return res.json({
      status: false,
      message: "Not Authorize to access this page",
    });
  }
};
