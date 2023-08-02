const Order = require("../model/orderModel");

exports.createOrder = async (req, res) => {
  const { orderItem, address, pincode, totalPrice } = req.body;

  const order = new Order({
    orderItem: orderItem,
    address: address,
    pincode: pincode,
    totalPrice: totalPrice,
  });

  const orderPlaced = await order.save();

  if (orderPlaced) {
    res.json({ status: true, message: "Order Placed Successfully!" });
  } else {
    res.json({ status: false, message: "Server Error !" });
  }
};
