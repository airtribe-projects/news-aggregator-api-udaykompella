const jwt = require("jsonwebtoken");
const CustomError = require("../utils/CustomError");

module.exports = function VerifyToken(req, res, next) {
  // Get the authorization header
  const authHeader = req.headers.authorization;

  // Check if header exists and starts with 'Bearer '
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomError(401, "unauthorized");
  }

  // Extract the token
  const token = authHeader.split(" ")[1];

  // Define your secret key (should be loaded from environment variables in production)
  const secretKey = process.env.JWT_SECRET; // Replace with your actual secret key

  // Verify the token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      throw new CustomError(401, "unauthorized");
    }

    // Attach the decoded payload to the request object
    req.user = decoded;
    next(); // Proceed to the next middleware or route handler
  });
};
