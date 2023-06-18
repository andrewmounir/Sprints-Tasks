const urlProducts = "https://api.escuelajs.co/api/v1/products";
const urlRate = "https://api.exchangerate.host/latest?base=USD";

const http = require(`http`);
const url = require(`url`);
const fetchProducts = async (currency_code) => {
  try {
    const responseRate = await fetch(urlRate);
    const rateData = await responseRate.json();
    const rate = rateData.rates[currency_code];

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
    console.log(rate);
  } catch (err) {
    console.log(err);
  }
};

const server = http.createServer((req, res) => {
  // Handle GET request
  if (req.method === "GET") {
    // Retrieve data from the request URL
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;

    // Extract the ID from the URL path
    const id = path.substring(1); // Remove the leading slash

    // Send response
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(JSON.stringify(fetchProducts(id)));
  }

  // Handle POST request
  if (req.method === "POST") {
    let body = "";
    

    // Accumulate data chunks from the request
    req.on("data", (chunk) => {
      body += chunk;
    });

    // Process the received data
    req.on("end", async () => {
      // Parse the data if it is in JSON format
      const data = JSON.parse(body);

      // Perform any required actions with the data
      console.log("Received POST data:", data);
      const result = await fetchProducts(id);
      // Send response
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      fetchProducts(id);
      res.end("This is a POST request");
     
    });
  }
});

server.listen(8080, () => {
  console.log("Server running on port 8080");
});
