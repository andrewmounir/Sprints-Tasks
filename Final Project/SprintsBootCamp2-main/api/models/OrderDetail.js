const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderDetailSchema = new Schema({
  product_id:String,
  price:Number,
  qty:Number
});

module.exports = mongoose.model("OrderDetail", orderDetailSchema);
