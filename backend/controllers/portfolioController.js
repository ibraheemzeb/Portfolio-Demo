const asyncHandler = require("express-async-handler");

const ContactData = require("../model/portfolioModel");
const admin = require("../model/adminModel");
const setContactData = asyncHandler(async (req, res) => {
  const { fullname, email, subject, details } = req.body;
  if (req.body === null) {
    res.status(400);
    throw new Error("Please add text filed");
  }
  const contactdata = await ContactData.create({
    fullname,
    email,
    subject,
    details,
  });

  console.log(contactdata);
  res.status(200).json(contactdata);
});

const getContactData = asyncHandler(async (req, res) => {
  const data = await ContactData.find();
  console.log(data);
  res.status(200).json(data);
});

module.exports = {
  getContactData,
  setContactData,
  // updatePortfolio,
  // deletePortfolio,
};
