const express = require("express");
const auth = require("../middleware/auth");
const { createOrder, getAllOrders } = require("../controllers/OrderController");

const router = express.Router();
router.post("/", auth, createOrder);
router.get("/", getAllOrders);
module.exports = router;
