const router = require("express").Router();
const { verifyTokenAndAdmin } = require("../middleware/auth");
const {
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  createProduct,
} = require("../controllers/product.js");

router.post("/", verifyTokenAndAdmin, createProduct);
router.get("/", getAllProducts);
router.get("/find/:id", getProduct);
router.put("/:id", verifyTokenAndAdmin, updateProduct);
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

module.exports = router;
