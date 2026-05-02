const express = require("express");
const DBconnect = require("./config/db");
const app = express();
const productRoutes = require("./routes/productRoutes");

app.use(express.json());
DBconnect();

app.use("/api/products/", productRoutes);

module.exports = app;
