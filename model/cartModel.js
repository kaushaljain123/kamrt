const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
  },
  stocks: {
    type: String,
  },
  brandName: {
    type: String,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
