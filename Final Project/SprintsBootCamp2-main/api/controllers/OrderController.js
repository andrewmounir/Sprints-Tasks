const Model = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const product = await Model.create(req.body);
    res.json({ data: product, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Model.find();
    res.json({ data: orders, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
