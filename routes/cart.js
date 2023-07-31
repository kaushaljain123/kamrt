const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");
const { addToCart } = require("../controller/cartController");

router.post("/add", addToCart);

module.exports = router;
