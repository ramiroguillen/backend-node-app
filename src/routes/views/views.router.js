const viewsRouter = require("express").Router();

const Products = require("../../apis/products.api");

// viewsRouter.get("/", (req, res) => {
//     res.render("productsForm")
// });

// viewsRouter.post("/products", async (req, res) => {
//     await Products.createNew(req.body);
//     res.redirect("/");
// });

viewsRouter.get("/products", (req, res) => {
    let elements = Products.getAll();
    res.render("home", { products: elements });
});

module.exports = viewsRouter;