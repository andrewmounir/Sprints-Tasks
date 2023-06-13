const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: String,
  image: String,
  productCount:Number
});

module.exports = mongoose.model("Category", categorySchema);
