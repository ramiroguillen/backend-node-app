const Products = require("../apis/products.api");

const getProducts = async (req, res) => {
    const { limit } = req.query;
    try {
        res.json(await Products.getAll().slice(0, limit));
    } catch {
        res.json({ message: "ERROR when obtaining products" })
    }
}

const getProductById = async (req, res) => {
    try {
        res.json(await Products.getById(req.params.pid));
    } catch {
        res.json({ message: "ERROR when obtaining product by id" })
    }
}

const createProduct = async (req, res) => {
    try {
        res.json(await Products.create(req.body));
    } catch (error) {
        res.json({ message: "ERROR when creating product" })
    }
}

const updateProduct = async (req, res) => {
    try {
        res.json(await Products.update(req.params.pid, req.body));
    } catch {
        res.json({ message: "ERROR when updating product" })
    }
}

const deleteProduct = async (req, res) => {
    try {
        res.json(await Products.remove(req.params.pid));
    } catch {
        res.json({ message: "ERROR when deleting product" })
    }
}

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };