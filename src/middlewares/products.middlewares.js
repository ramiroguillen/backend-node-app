const validateProductFields = (req, res, next) => {
    const { title, description, code, price, status, stock, category } = req.body;
    if (!title || !description || !code || !price || !status || !stock || !category) {
        res.json({ message: "Required fields missing" })
    } else {
        if (typeof (title) !== "string" || typeof (description) !== "string" || typeof (code) !== "string" || typeof (price) !== "number" || typeof (status) !== "boolean" || typeof (stock) !== "number" || typeof (category) !== "string") {
            res.json({ message: "Invalid fields" })
        } else {
            next();
        }
    }
}

module.exports = { validateProductFields }