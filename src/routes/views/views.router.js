const viewsRouter = require("express").Router();

const Products = require("../../apis/products.api");

viewsRouter.get("/products", (req, res) => {
    let elements = Products.getAll();
    res.render("home", { products: elements });
});

viewsRouter.get("/realtimeproducts", (req, res) => {
    let elements = Products.getAll();
    res.render("realTimeProducts", { products: elements });
});

module.exports = viewsRouter;