const mongoose = require("mongoose");

const portfoliodbSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add email"],
    },
    subject: {
      type: String,
      required: [true, "Please Enter Subject"],
    },
    details: {
      type: String,
      required: [true, "Please Enter details"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ContactData", portfoliodbSchema);
