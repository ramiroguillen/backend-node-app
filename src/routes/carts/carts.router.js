const cartsRouter = require("express").Router();
const { createCart, getCartById, addProductToCart } = require("../../controllers/carts.controller");

cartsRouter.post("/", createCart);
cartsRouter.get("/:cid", getCartById);
cartsRouter.post("/:cid/products/:pid", addProductToCart);

module.exports = cartsRouter;