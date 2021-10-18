const express = require("express");
const dotenv = require("dotenv");
const { db } = require("./config/db");
const auth = require("./routes/auth");
const user = require("./routes/user");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/auth", auth);
app.use("/api/user", user);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server Up and Running`);
});

db();
