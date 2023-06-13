const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");

//routes
const categoryRouter = require("./routes/CategoryRoutes");
const productRouter = require("./routes/ProductRoutes");
const userRouter = require("./routes/UserRoutes");
const orderRouter = require("./routes/OrderRoutes");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://admin:123123123@cluster0.qbflnrn.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);
const cors = require("cors");
express()
  .use(cors({ origin: "*" }))
  .use(express.json())
  .use(express.static(path.join(__dirname, "public")))
  .use("/api/categories", categoryRouter)
  .use("/api/products", productRouter)
  .use("/api/users", userRouter)
  .use("/api/orders", orderRouter)
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
