const express = require("express");
const userModal = require("../Models/userModel");
const CustomError = require("../utils/CustomError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const VerifyToken = require("../middelware/VerifyToken");
const router = express.Router();

router.use(VerifyToken);
router.get("/", async (req, res, next) => {
  try {
    const { email } = req.user;
    const result = await userModal.findOne({
      email,
    });

    return res.status(200).json({
      preferences: result.preferences,
    });
  } catch (err) {
    next(err);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const { email } = req.user;
    const result = await userModal.findOne({
      email,
    });

    return res.status(200).json({
      preferences: result.preferences,
    });
  } catch (err) {
    next(err);
  }
});
router.put("/", async (req, res, next) => {
  try {
    const { email } = req.user;
    let result = await userModal.findOneAndUpdate(
      {
        email,
      },
      {
        preferences: req.body.preferences,
      }
    );
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
