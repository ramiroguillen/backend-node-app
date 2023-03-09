const socket = io.connect();

socket.on("products", (items) => renderProducts(items));
// RENDER PRODUCTS
const renderProducts = (items) => {
    const html = items.map((item) => {
        return (` 
            <tr id=${item.id}>
                <th scope="row" class="align-middle">${item.title}</th>
                <td class="align-middle">$ ${item.price}</td>
                <td>
                    <img 
                        src=${item.thumbnail}
                        alt=${item.title} 
                        class="rounded mx-auto d-block"
                        style="height:96px;width:96px"
                    >
                </td>
                <td>
                    <button class="btn-danger" name=${item.id} onclick="deleteProduct(this)">DELETE</button>
                    <button class="btn-warning" name=${item.id} onclick="updateProduct(this)">UPDATE</button>
                </td>
            </tr>`);
    }).join(" ");
    document.getElementById("products").innerHTML = html;
    return;
}
// EMIT CREATE NEW PRODUCT
document.getElementById("product-form").addEventListener("submit", (e) => {
    const title = document.getElementById("product-title").value;
    const description = document.getElementById("product-description").value;
    const code = document.getElementById("product-code").value;
    const price = document.getElementById("product-price").value;
    const status = document.getElementById("product-status").checked;
    const stock = document.getElementById("product-stock").value;
    const category = document.getElementById("product-category").value;
    const thumbnail = document.getElementById("product-thumbnail").value;
    socket.emit("new-product", product = {
        title,
        description,
        code,
        price: parseFloat(price),
        status: status === "on" ? true : false,
        stock: parseInt(stock),
        category,
        thumbnail
    });
    return;
});
// EMIT DELETE PRODUCT
function deleteProduct(btn) {
    console.log("DELETE BUTTON", btn.name)
    socket.emit("delete-product", productID = btn.name);
    return;
}
// RENDER UPDATE FORM
const openUpdate = () => {
    const html = ` 
            <div class="my-3">
                <label for="title" class="form-label"> Title: </label>
                <input id="update-title" type="text" name="title" class="form-control">
            </div>

            <div class="my-3">
                <label for="description" class="form-label"> Description: </label>
                <input id="update-description" type="text" name="description" class="form-control">
            </div>

            <div class="my-3">
                <label for="code" class="form-label"> Code: </label>
                <input id="update-code" type="text" name="code" class="form-control">
            </div>

            <div class="mb-3">
                <label for="price" class="form-label"> Price: </label>
                <input id="update-price" type="number" name="price" class="form-control">
            </div>

            <div class="mb-3 form-check">
                <label for="status" class="form-check-label"> Status: </label>
                <input id="update-status" type="checkbox" name="status" class="form-check-input">
            </div>

            <div class="my-3">
                <label for="stock" class="form-label"> Stock: </label>
                <input id="update-stock" type="number" name="stock" class="form-control">
            </div>

            <div class="my-3">
                <label for="category" class="form-label"> Category: </label>
                <input id="update-category" type="text" name="category" class="form-control">
            </div>

            <div class="mb-3">
                <label for="thumbnail" class="form-label"> Thumbnail: </label>
                <input id="update-thumbnail" type="text" name="thumbnail" class="form-control">
            </div>

            <div class="mb-3">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>`

    document.getElementById("update-form").innerHTML = html;
    return;
}
// EMIT UPDATE ON SUBMIT
function updateProduct(btn) {
    const id = btn.name;
    openUpdate();
    document.getElementById("update-form").addEventListener("submit", (e) => {
        const title = document.getElementById("update-title").value;
        const description = document.getElementById("update-description").value;
        const code = document.getElementById("update-code").value;
        const price = document.getElementById("update-price").value;
        const status = document.getElementById("update-status").checked;
        const stock = document.getElementById("update-stock").value;
        const category = document.getElementById("update-category").value;
        const thumbnail = document.getElementById("update-thumbnail").value;
        socket.emit("update-product", product = {
            id,
            title,
            description,
            code,
            price: parseFloat(price),
            status: status === "on" ? true : false,
            stock: parseInt(stock),
            category,
            thumbnail
        });
    });
    return;
}