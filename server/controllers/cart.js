const Cart = require("../models/Cart");

// CREATE Cart
const createCart = async (req, res) => {
  try {
    const newCart = new Cart(req.body);
    const savedCart = await newCart.save();
    res.status(201).json(savedCart);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// GET USER Cart
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
// GET ALL CartS
const getAllCarts = async (req, res) => {

  try {
    const carts = await Cart.find()
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// UPDATE
const updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// DELETE
const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart Deleted");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  createCart,
  getCart,
  getAllCarts,
  updateCart,
  deleteCart,
};
