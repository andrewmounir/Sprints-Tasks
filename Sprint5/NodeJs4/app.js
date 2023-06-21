const p = require("./Controller/control");
const valid = require("../services/validate");
const express = require(`express`);
const app = express();
app.use(express.json());
app.use(valid);
app.get(`/viewproducts`, p.getProducts);
app.post(`/create`, p.createProduct);
app.put("/update", p.updateProdcut);
app.delete("/delete", p.deleteProduct);

app.listen(8080, (req, res) => {
  console.log(`server started`);
});
