const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");
const {
  createCatalog,
  getAllCatalog,
  updateCatalog,
  deleteCatalog,
  getSingleCatalog,
} = require("../controller/catalogController");

router.post("/createCatalog", protect, createCatalog);
router.get("/getAllCatalog", getAllCatalog);
router.put("/:id/update", protect, updateCatalog);
router.delete("/:id/delete", protect, deleteCatalog);
router.get("/:id/singleCatalog", getSingleCatalog);

module.exports = router;
