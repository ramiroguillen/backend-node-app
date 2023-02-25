const socket = io.connect();

const renderProducts = (data) => {
    const html = data.map((e, i) => {
        return (` 
            <tr id=${i}>
                <th scope="row" class="align-middle">${e.title}</th>
                <td class="align-middle">$ ${e.price}</td>
                <td>
                    <img 
                        src=${e.thumbnail}
                        alt=${e.title} 
                        class="rounded mx-auto d-block"
                        style="height:96px;width:96px"
                    >
                </td>
            </tr>`
        );
    }).join(" ");
    document.getElementById("products").innerHTML = html;
    return;
}

const productForm = document.getElementById("product-form");

productForm.addEventListener("submit", (e) => {
    const title = document.getElementById("product-title").value;
    const description = document.getElementById("product-description").value;
    const code = document.getElementById("product-code").value;
    const price = document.getElementById("product-price").value;
    const status = document.getElementById("product-status").checked;
    const stock = document.getElementById("product-stock").value;
    const category = document.getElementById("product-category").value;
    const thumbnail = document.getElementById("product-thumbnail").value;
    socket.emit("new-product", product = { title, description, code, price: parseFloat(price), status: status === "on" ? true : false, stock: parseInt(stock), category, thumbnail });
    return;
})

socket.on("products", (items) => renderProducts(items));