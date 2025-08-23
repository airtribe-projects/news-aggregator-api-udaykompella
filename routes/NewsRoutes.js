const express = require("express");
const userModal = require("../Models/userModel");
const CustomError = require("../utils/CustomError");
const VerifyToken = require("../middelware/VerifyToken");
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("4fea0bc1d84440f8a90783f475f5ee4c");
const router = express.Router();
router.use(VerifyToken);
router.get("/", async (req, res, next) => {
  try {
    let response = await newsapi.v2.topHeadlines({
      category: "business",
      language: "en",
      country: "us",
    });
    res.status(200).json({
      news: response,
    });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
