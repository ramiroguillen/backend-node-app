const productsRouter = require("express").Router();
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require("../../controllers/products.controller");

productsRouter.get("/", getProducts);
productsRouter.get("/:pid", getProductById);
productsRouter.post("/", createProduct);
productsRouter.put("/:pid", updateProduct);
productsRouter.delete("/:pid", deleteProduct);

module.exports = productsRouter;