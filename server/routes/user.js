const router = require("express").Router();
const {
  verifyTokenAndAuthoriztion,
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
router.put("/:id", verifyTokenAndAuthoriztion, updateUser);
router.delete("/:id", verifyTokenAndAuthoriztion, deleteUser);
router.get("/stats", verifyTokenAndAdmin, getUserStats);

module.exports = router;
