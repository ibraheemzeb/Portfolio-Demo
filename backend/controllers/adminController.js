const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const Admin = require("../model/adminModel");

const registerAdmin = asyncHandler(async (req, res) => {
  const { fullname, email, password } = req.body;

  if (!fullname || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const adminExists = await Admin.findOne({ email });

  if (adminExists) {
    res.status(400);
    throw new Error("User Already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const admin = await Admin.create({
    fullname,
    email,
    password: hashedPassword,
  });
  if (admin) {
    res.status(201).json({
      _id: admin.id,
      name: admin.fullname,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });

  if (admin && (await bcrypt.compare(password, admin.password))) {
    res.json({
      _id: admin.id,
      name: admin.fullname,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

const getAdmin = asyncHandler(async (req, res) => {
  
  res.status(200).json(req.admin);
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  registerAdmin,
  loginAdmin,
  getAdmin,
};
