module.exports = async (err, req, res, next) => {
  console.log(err.statusCode);
  return res.status(err.statusCode || 400).json({
    stack: err.stack,
    message: err.message,
  });
};
