const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  singleImage: {
    type: String,
  },

  multipleImage: {
    type: String,
  },
});

const Upload = mongoose.model("Upload", uploadSchema);

module.exports = Upload;
