const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { db } = require("./config/db");
const auth = require("./routes/auth");
const user = require("./routes/user");
const product = require("./routes/product");
const cart = require("./routes/cart");
const order = require("./routes/order");
const payment = require("./routes/payment");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", auth);
app.use("/api/user", user);
app.use("/api/products", product);
app.use("/api/cart", cart);
app.use("/api/order", order);
app.use("/api/payment", payment);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server Up and Running`);
});

db();




