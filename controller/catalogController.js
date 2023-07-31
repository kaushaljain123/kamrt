const Catalog = require("../model/catalogModel");

exports.createCatalog = async (req, res) => {
  const catalog = await Catalog.create(req.body); // Insert Data

  if (catalog) {
    res.json({ status: true, message: "Catalog Created Successfully!" });
  } else {
    res.json({ status: false, message: "Server Error!" });
  }
};

exports.getAllCatalog = async (req, res) => {
  const catalog = await Catalog.find(); // Select Data

  if (catalog) {
    res.json({
      status: true,
      message: "Catalog Find Successfully!",
      data: catalog,
    });
  } else {
    res.json({ status: false, message: "Server Error!" });
  }
};

exports.updateCatalog = async (req, res) => {
  const catalog = await Catalog.findByIdAndUpdate(req.params.id, req.body);

  if (catalog) {
    res.json({ status: true, message: "Catalog Update Successfully!" });
  } else {
    res.json({ status: false, message: "Server Error!" });
  }
};

exports.deleteCatalog = async (req, res) => {
  const catalog = await Catalog.findByIdAndRemove(req.params.id);

  if (catalog) {
    res.json({ status: true, message: "Catalog Remove Successfully!" });
  } else {
    res.json({ status: false, message: "Server Error!" });
  }
};

exports.getSingleCatalog = async (req, res) => {
  const catalog = await Catalog.findById(req.params.id);

  if (catalog) {
    res.json({
      status: true,
      message: "Catalog Remove Successfully!",
      data: catalog,
    });
  } else {
    res.json({ status: false, message: "Server Error!" });
  }
};
