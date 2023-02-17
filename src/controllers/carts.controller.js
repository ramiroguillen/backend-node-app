const Carts = require("../classes/Container");

const createCart = async (req, res) => {
    let response;
    try {
        response = await Carts.create(req.body);
    } catch {
        response = { message: "ERROR when creating cart" }
    }
    return response;
}

const getCartById = async (req, res) => {
    let response;
    try {
        response = await Carts.getById(req.params.cid);
    } catch {
        response = { message: "ERROR when obtaining cart by id" }
    }
    return response;
}

const addProductToCart = async (req, res) => {
    let response;
    try {
        response = await Carts.add(req.params.cid, req.params.pid, req.body.amount);
    } catch {
        response = { message: "ERROR when adding products to cart" }
    }
    return response;
}

module.exports = { createCart, getCartById, addProductToCart };