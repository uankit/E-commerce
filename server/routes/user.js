const router = require("express").Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/auth");
const {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getUserStats,
} = require("../controllers/user.js");

router.get("/", verifyTokenAndAdmin, getAllUsers);
router.get("/find/:id", verifyTokenAndAdmin, getUser);
router.put("/:id", verifyTokenAndAuthorization, updateUser);
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);
router.get("/stats", verifyTokenAndAdmin, getUserStats);

module.exports = router;
