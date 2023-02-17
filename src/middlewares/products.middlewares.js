const validateProduct = (req, res, next) => {
    const { title, description, code, price, status, stock, category } = req.body;
    if (!title || !description || !code || !price || !status || !stock || !category) {
        res.json({ message: "Required fields missing" })
    } else {
        next();
    }
}

module.exports = { validateProduct }