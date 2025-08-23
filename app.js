const express = require("express");
const app = express();
const users = require("./Models/userModel");
const userModal = require("./Models/userModel");
const connectDB = require("./utils/connectDB");
const ErrorHandler = require("./middelware/ErrorHandler");

const port = 3000;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CustomError = require("./utils/CustomError");
const VerifyToken = require("./middelware/VerifyToken");
const authRoutes = require("./routes/AuthRoutes");
const preferenceRoutes = require("./routes/Preferences");
const newsRoutes = require("./routes/NewsRoutes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", async (req, res) => {
  res.status(200).send("hi welcome");
});
app.use("/users", authRoutes);
app.use("/users/preferences", preferenceRoutes);
app.use("/news", newsRoutes);
app.use(VerifyToken);

connectDB().then(() => {
  if (require.main === module) {
    app.listen(port, (err) => {
      if (err) {
        console.error("Something bad happened", err);
      }
      console.log(`Server is listening on ${port}`);
    });
  }
});

module.exports = app;
