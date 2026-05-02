const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    stock: Number,
  },
  { timestamps: true },
);

const Product = mongoose.model("Products", productSchema);
module.exports = Product;
