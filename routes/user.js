const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  emailSend,
} = require("../controller/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/sendEmail", emailSend);

module.exports = router;
