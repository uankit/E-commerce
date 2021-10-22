const router = require("express").Router();
const {
  verifyTokenAndAuthorization,
  verifyToken,
  verifyTokenAndAdmin,
} = require("../middleware/auth");
const {
  updateOrder,
  deleteOrder,
  getAllOrders,
  getOrder,
  createOrder,
  getIncome
} = require("../controllers/order.js");

router.post("/", verifyToken, createOrder);
router.get("/", verifyTokenAndAdmin, getAllOrders);
router.get("/find/:id", verifyTokenAndAuthorization ,getOrder);
router.put("/:id", verifyTokenAndAdmin, updateOrder);
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);
router.get("/income", verifyTokenAndAdmin, getIncome);


module.exports = router;
