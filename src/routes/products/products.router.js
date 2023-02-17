const productsRouter = require("express").Router();
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require("../../controllers/products.controller");
const { validateProduct } = require("../../middlewares/products.middlewares");

productsRouter.get("/", getProducts);
productsRouter.get("/:pid", getProductById);
productsRouter.post("/", validateProduct, createProduct);
productsRouter.put("/:pid", updateProduct);
productsRouter.delete("/:pid", deleteProduct);

module.exports = productsRouter;