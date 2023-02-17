const indexRouter = require("express").Router();
const productsRouter = require("./products/products.router");
const cartsRouter = require("./carts/carts.router");

indexRouter.use("/products", productsRouter);
indexRouter.use("/carts", cartsRouter);

module.exports = indexRouter;