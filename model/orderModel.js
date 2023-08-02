const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderItem: [
    {
      name: {
        type: String,
        require: true,
      },
      price: {
        type: String,
        require: true,
      },
      description: {
        type: String,
        require: true,
      },
      stock: {
        type: String,
        require: true,
      },
    },
  ],

  address: {
    type: String,
    require: true,
  },
  pincode: {
    type: String,
    require: true,
  },
  totalPrice: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    enum: ["orderplaced", "delivied", "cancel"],
    default: "orderplaced",
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
