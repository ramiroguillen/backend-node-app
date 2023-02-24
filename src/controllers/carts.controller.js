const Carts = require("../apis/carts.api");

const createCart = async (req, res) => {
    try {
        res.json(await Carts.create({ products: [] }));
    } catch {
        res.json({ message: "ERROR when creating cart" })
    }
}

const getCartById = async (req, res) => {
    try {
        res.json(await Carts.getById(req.params.cid));
    } catch {
        res.json({ message: "ERROR when obtaining cart by id" })
    }
}

const addProductToCart = async (req, res) => {
    try {
        res.json(await Carts.add(req.params.cid, req.params.pid));
    } catch (error) {
        res.json({ message: "ERROR when adding products to cart" })
    }
}

module.exports = { createCart, getCartById, addProductToCart };