const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getFeaturedProducts,
  getRecentProducts,
  getProductsByCategoryId,
} = require("../controllers/ProductController");

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", createProduct);
router.get("/getFeatured", getFeaturedProducts);
router.get("/getRecent", getRecentProducts);
router.get("/getByCategoryId/:id", getProductsByCategoryId);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
module.exports = router;
