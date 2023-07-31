const mongoose = require("mongoose");

const catalogSchema = new mongoose.Schema({
  catalogName: {
    type: String,
    require: true,
  },
  catalogMrp: {
    type: String,
    require: true,
  },
  catalogPrice: {
    type: String,
    require: true,
  },
  catalogDescription: {
    type: String,
    require: true,
  },
  catalogStocks: {
    type: String,
    require: true,
  },
  catalogBrandName: {
    type: String,
    require: true,
  },
  catalogId: {
    type: String,
    require: true,
  },
  catalogImage: {
    type: String,
    require: true,
  },
});

const Catalog = mongoose.model("Catalog", catalogSchema);

module.exports = Catalog;
