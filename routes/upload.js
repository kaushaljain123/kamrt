const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");
const upload = require("../middleware/upload");
const {
  uploadSingleImage,
  uploadMultipleImage,
} = require("../controller/uploadController");

router.post("/single", upload.single("singleImage"), uploadSingleImage);
router.post("/multiple", upload.array("multipleImage", 5), uploadMultipleImage);

module.exports = router;
