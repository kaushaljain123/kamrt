const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");
const { addToCart, getAllCartItem } = require("../controller/cartController");

router.post("/add", addToCart);
router.post("/getAll", getAllCartItem);

module.exports = router;
