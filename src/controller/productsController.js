const Product = require("../model/product.model");

const getAllProducts = async (req, res) => {
  const allProducts = await Product.find();
  return res
    .status(200)
    .json({ status: 200, message: "products fetched successfully", products: allProducts });
};

const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  const singleProduct = await Product.findById(id);
  return res.status(200).json({ status: 200, message: "product fetched successfully", singleProduct });
};

const createProduct = async (req, res) => {
  const { name, price, description, category, stock } = req.body;
  if (!name || !price || !description || !category || !stock) {
    return console.log(
      "Please provide all required fields like {name, price, description, category, stock}",
    );
  }

  const createdProduct = await Product.create({ name, price, description, category, stock });
  return res
    .status(201)
    .json({ status: 201, message: "Prduct created successfully", createdProduct });
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { returnDocument: "after" });
  return res
    .status(200)
    .json({ status: 200, message: "Product updated successfully", updatedProduct });
};
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  return res
    .status(200)
    .json({ status: 204, message: "Product deleted successfully", deletedProduct });
};

module.exports = { getAllProducts, getSingleProduct, createProduct, updateProduct, deleteProduct };
