const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/");
  },

  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, "kmart" + Date.now() + ext);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      console.log("Only JPG and PNG File supported!");
      cb(null, false);
    }
  },
});

module.exports = upload;
