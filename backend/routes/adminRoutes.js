const express = require("express");
const router = express.Router();
const {
  registerAdmin,
  loginAdmin,
  getAdmin,
} = require("../controllers/adminController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").post(registerAdmin);
router.route("/login").post(loginAdmin);
router.route("/admin").get(protect, getAdmin);

module.exports = router;
