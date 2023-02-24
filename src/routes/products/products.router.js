const productsRouter = require("express").Router();
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require("../../controllers/products.controller");
const { validateProductFields } = require("../../middlewares/products.middlewares");

productsRouter.get("/", getProducts);
productsRouter.get("/:pid", getProductById);
productsRouter.post("/", validateProductFields, createProduct);
productsRouter.put("/:pid", updateProduct);
productsRouter.delete("/:pid", deleteProduct);

module.exports = productsRouter;