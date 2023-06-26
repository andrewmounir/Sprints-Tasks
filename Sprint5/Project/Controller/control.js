// get model to be shown on view
const products = require("../Model/product");

const getProducts = (req, res) => {
    
  res.send(JSON.stringify(products.products));
};

const getProduct = (req, res) => {
  let id = req.params;
  let product = products.products.find((product) => product.id === id);

  res.send(JSON.stringify(product.products));
};

const createProduct = (req, res) => {
  const { title, price, description, images, categoryId } = req.body;

  let product = {
    title,
    price,
    description,
    images,
    categoryId
  };

  products.products.push(product);
  console.log(product);
  res.send(JSON.stringify(products.products));
};

const updateProdcut = (req, res) => {
  let id = req.params[0];
  let price = req.params[1];
  let title = req.params[2];

  let index = products.products.findIndex((product) => product.id === id);
  let product = products.products[index];
  product.price = price;
  product.title = title;
  res.send(JSON.stringify(products.products));
};

const deleteProduct = (req, res) => {
  let id = req.params;
  let index = products.products.findIndex((product) => product.id === id);
  let product = products.products[index];
  product.splice(index, 1);
  res.send(JSON.stringify(products.products));
};

module.exports = {
  getProduct,
  createProduct,
  getProducts,
  updateProdcut,
  deleteProduct
};
