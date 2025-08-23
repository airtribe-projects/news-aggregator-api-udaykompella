class CustomError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode || 40;
    this.name = this.constructor.name;
  }
}
module.exports = CustomError;
