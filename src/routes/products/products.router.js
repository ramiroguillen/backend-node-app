const productsRouter = require("express").Router();
const productsControllers = require("../../controllers/products/products.controller");

productsRouter.get("/", productsControllers.getProducts);
productsRouter.get("/:pid", productsControllers.getProductById);
productsRouter.post("/", productsControllers.createProduct);
productsRouter.put("/:pid", productsControllers.updateProduct);
productsRouter.delete("/:pid", productsControllers.deleteProduct);

module.exports = productsRouter;