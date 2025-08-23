const express = require("express");
const userModal = require("../Models/userModel");
const CustomError = require("../utils/CustomError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await userModal.findOne({
      email,
    });
    if (!user) {
      throw new Error("User not found!");
    }
    let result = await bcrypt.compare(password, user.password);

    if (result) {
      let token = jwt.sign(
        {
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );
      return res.status(200).json({
        token,
      });
    } else {
      throw new CustomError(401, "password didnt match");
    }
  } catch (err) {
    next(err);
  }
});
router.post("/signup", async (req, res, next) => {
  try {
    console.log("requested recived");
    const { email, name, password, preferences } = req.body;
    const existingUser = await userModal.findOne({ email });
    if (existingUser) {
      throw new CustomError(409, "user already exists");
    }
    if (!email) {
      throw new CustomError(400, "email is required");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await userModal.create({
      name,
      email,
      password: hashedPassword,
      preferences,
    });
    return res.status(200).send("user created!");
  } catch (err) {
    next(err);
  }
});
module.exports = router;
