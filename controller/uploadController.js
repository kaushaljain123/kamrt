const Upload = require("../model/uploadModel");

exports.uploadSingleImage = async (req, res) => {
  if (req.file) {
    let productImage = new Upload({
      singleImage: req.file.path,
    });

    let product = await productImage.save();

    if (product) {
      res.json({ status: true, message: "Image Uploaded" });
    } else {
      res.json({ status: true, message: "Server Error!" });
    }
  }
};

exports.uploadMultipleImage = async (req, res) => {
  if (req.files) {
    let path = "";

    req.files.forEach(function (files, index, arr) {
      path = path + files.path + ",";
    });

    path = path.substring(0, path.lastIndexOf(","));
    let productImage = new Upload({
      multipleImage: path,
    });

    let product = await productImage.save();

    if (product) {
      res.json({ status: true, message: "Image Uploaded" });
    } else {
      res.json({ status: true, message: "Server Error!" });
    }
  }
};
