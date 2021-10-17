const express = require("express");
const dotenv = require("dotenv");
const { db } = require("./config/db");

dotenv.config();

const app = express();
app.use(express.json());

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server Up and Running`);
});

db();
