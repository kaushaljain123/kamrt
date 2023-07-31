const Cart = require("../model/cartModel");

exports.addToCart = async (req, res) => {
  const { name, price, description, stocks, brandName, image } = req.body;

  const cart = new Cart({
    name: name,
    price: price,
    stocks: stocks,
    description: description,
    brandName: brandName,
    image: image,
  });

  const cartValue = await cart.save();

  if (cartValue) {
    res.json({ status: true, message: "Add to Cart Successfully!" });
  } else {
    res.json({ status: true, message: "Server Error!" });
  }
};

exports.getAllCartItem = async (req, res) => {
  let cartItem = await Cart.find();

  if (cartItem) {
    res.json({
      status: true,
      message: "Cart Find Successfully!",
      data: cartItem,
    });
  } else {
    res.json({ status: true, message: "Server Error!" });
  }
};
