const express = require("express");
const router = express.Router();
const {
  getContactData,
  setContactData,
} = require("../controllers/portfolioController");


router.route("/").get(getContactData).post(setContactData);


module.exports = router;
