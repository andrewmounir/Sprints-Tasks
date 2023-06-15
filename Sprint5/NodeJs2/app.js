const urlProducts = "https://api.escuelajs.co/api/v1/products";
const urlRate = "https://api.exchangerate.host/latest?base=USD";

const fetchProducts = async () => {
  try {
    const responseRate = await fetch(urlRate);
    const rateData = await responseRate.json();
    const rate = rateData.rates.EGP;

    const responseProducts = await fetch(urlProducts);
    const productsData = await responseProducts.json();

    const groupedData = productsData.reduce((result, obj) => {
      const key = obj.category.id;
      if (!result[key]) result[key] = { category: obj.category, products: [] };
      obj.price *= rate;
      result[key].products.push(obj);
      return result;
    }, {});

    console.log(groupedData);
    console.log(JSON.stringify(groupedData));
  } catch (err) {
    console.log(err);
  }
};

fetchProducts();
