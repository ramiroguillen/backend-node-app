const cartsRouter = require("express").Router();
const cartsControllers = require("../../controllers/carts/carts.controller");

cartsRouter.post("/", cartsControllers.createCart);
cartsRouter.get("/:cid", cartsControllers.getCartById);
cartsRouter.post("/:cid/products/:pid", cartsControllers.addProduct);

module.exports = cartsRouter;