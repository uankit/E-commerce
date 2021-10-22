const router = require("express").Router();
const {
  verifyTokenAndAuthorization,
  verifyToken,
  verifyTokenAndAdmin,
} = require("../middleware/auth");
const {
  updateCart,
  deleteCart,
  getAllCarts,
  getCart,
  createCart,
} = require("../controllers/cart.js");

router.post("/", verifyToken, createCart);
router.get("/", verifyTokenAndAdmin, getAllCarts);
router.get("/find/:id", getCart);
router.put("/:id", verifyTokenAndAuthorization, updateCart);
router.delete("/:id", verifyTokenAndAuthorization, deleteCart);

module.exports = router;
