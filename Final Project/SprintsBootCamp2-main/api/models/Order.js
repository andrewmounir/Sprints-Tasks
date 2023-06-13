const mongoose = require("mongoose");
const OrderDetail = require("../models/OrderDetail");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  sub_total_price: Number,
  shipping: Number,
  total_price: Number,
  user_id: String,
  order_date: Date,
  order_details: [],
  shipping_info: {
    first_name: String,
    last_name: String,
    email: String,
    mobile_number: String,
    address1: String,
    address2: String,
    country: String,
    city: String,
    state: String,
    zip_code: String,
  },
});

module.exports = mongoose.model("Order", orderSchema);
