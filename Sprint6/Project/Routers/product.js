const express = require("express");
const User = require("../models/user");
const Product = require("../models/product");
const router = new express.Router();
// posting product route
router.post("/product", async (req, res) => {
  let { name, price } = req.body;
  let id = Date.now().toString();
  let product = new Product({ id, name, price });
  try {
    await product.save();
    res.status(201).send({ productId: id });
  } catch (e) {
    res.status(400).send(e);
  }
});
// getting all products from the collection.
router.get("/products", async (req, res) => {
  try {
    let products = await Product.find();
    res.status(200).send(products);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/:userId/products/:productId", async (req, res) => {
  let { userId, productId } = req.params;
  try {
    let user = await User.findOne({ id: userId });
    if (!user) return res.status(404).json({ error: "no user found" });
    if (user.purchases.includes(productId))
      return res.status(400).json({ error: "already in stock" });
    if (!user.purchases) user.purchases = [];
    user.purchases.push(productId);
    await user.save();
    res.status(201).send({ message: " Transaction completed." });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
