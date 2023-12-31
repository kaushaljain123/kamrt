const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");
const { createOrder } = require("../controller/orderController");

router.post("/create", createOrder);

module.exports = router;
