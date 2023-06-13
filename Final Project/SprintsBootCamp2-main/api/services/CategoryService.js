const CategoryModel = require("../models/Category");
 
exports.getAllCategories = async () => {
  return await CategoryModel.find();
};
 
exports.createCategory = async (category) => {
  return await CategoryModel.create(category);
};
exports.getCategoryById = async (id) => {
  return await CategoryModel.findById(id);
};
 
exports.updateCategory = async (id, category) => {
  return await CategoryModel.findByIdAndUpdate(id, category);
};
 
exports.deleteCategory = async (id) => {
  return await CategoryModel.findByIdAndDelete(id);
};