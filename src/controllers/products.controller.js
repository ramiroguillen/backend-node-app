const Products = require("../classes/Container");

const getProducts = async (req, res) => {
    let response;
    try {
        response = await Products.getAll();
    } catch {
        response = { message: "ERROR when obtaining products" }
    }
    return response;
}

const getProductById = async (req, res) => {
    let response;
    try {
        response = await Products.getById(req.params.pid);
    } catch {
        response = { message: "ERROR when obtaining product by id" }
    }
    return response;
}

const createProduct = async (req, res) => {
    let response;
    try {
        response = await Products.create(req.body);
    } catch {
        response = { message: "ERROR when creating product" }
    }
    return response;
}

const updateProduct = async (req, res) => {
    let response;
    try {
        response = await Products.update(req.params.pid, req.body);
    } catch {
        response = { message: "ERROR when updating product" }
    }
    return response;
}

const deleteProduct = async (req, res) => {
    let response;
    try {
        response = await Products.remove(req.params.pid);
    } catch {
        response = { message: "ERROR when deleting product" }
    }
    return response;
}

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };