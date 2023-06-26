const p = require("./Controller/control");
const valid = require("./services/validate");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const express = require(`express`);
const app = express();
app.use(express.json());

const users = [
  {
    email: "sample@example.com",
    password: "12345"
  }
];

// MiddleWare to verify JWT
const verify = (req, res, next) => {
  try {
    const [_, token] = req.headers.authorization?.split(" ");
    console.log(token);
    const decode = jwt.verify(token, process.env.secret);
    console.log(decode);

    next();
  } catch (err) {
    console.log(err);
  }
};

// didnt apply validation here as there is no need only in registration its applied to confirm user has an email and password that matches the condition provided.
app.post(`/login`, (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => {
    return user.email === email && user.password === password;
  });

  try {
    if (!user) {
      console.log(email, password);

      return res.status(401).json("unauthenicated");
    }
    const token = jwt.sign(user, process.env.secret);

    return res.status(200).json({ ...user, token });
  } catch (err) {
    console.log(err);
  }
});

// validation middleware is applied here to ensure a correct email and password.
app.post("/register", valid.validateProduct, (req, res) => {
  try {
    let { email, password, repeatPassword } = req.body;
    console.log(email, password);
    users.push({
      email: email,
      password: password,
      password: repeatPassword
    });
    console.log("array of users: " + JSON.stringify(users));
    res.send("true");

    res.status(200);
  } catch (err) {
    console.log(err);
  }
});
// verify the token middleware is applied on the below routes to ensure user is authenticated to do following tasks.
//please note i dont have a database to store the token so its done manually with postman (bearer) but the logic is working when tested manually.
app.get(`/viewproducts`, verify, p.getProducts);
app.post(`/create`, verify, p.createProduct);
app.put("/update", verify, p.updateProdcut);
app.delete("/delete", verify, p.deleteProduct);

app.listen(8080, () => {
  console.log(`server started`);
});
