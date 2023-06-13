const mongoose = require("mongoose");
const Category = require("../models/Category");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  image: String,
  category_id: String,
  price: Number,
  discount: Number,
  rating: Number,
  rating_count: Number,
  is_featured: Boolean,
  is_recent: Boolean,
  description: String,
});

module.exports = mongoose.model("Product", productSchema);
