const express = require("express");
const auth = require("../middleware/auth");
const {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controllers/CategoryController");

const router = express.Router();

router.post("/", auth, createCategory);
router.get("/", getAllCategories);
router
  .route("/:id")
  .get(getCategoryById)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router;
