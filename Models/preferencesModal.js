const mongoose = require("mongoose");
const preferenceSchema = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("preference", preferenceSchema);
