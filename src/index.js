require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const handlebars = require("express-handlebars");
const indexRouter = require("./routes/index.router");
const viewsRouter = require("./routes/views/views.router");
const Products = require("./apis/products.api");

const PORT = process.env.PORT || 8080;
const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

app.engine("handlebars", handlebars.engine({
    defaultLayout: "main",
    extname: ".handlebars",
}));
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", indexRouter);
app.use("/", viewsRouter);

io.on("connection", socket => {
    console.log("SOCKET new connection");
    socket.emit("products", Products.getAll());

    socket.on("new-product", (data) => {
        Products.create(data);
        io.emit("products", Products.getAll());
    });

    socket.on("delete-product", (id) => {
        Products.remove(id);
        io.emit("products", Products.getAll());
        console.log("SOCKET UPDATE DELETE PRODUCTS", Products.getAll());
    })

    socket.on("update-product", (product) => {
        Products.update(product.id, product);
        io.emit("products", Products.getAll());
    })
});

httpServer
    .listen(PORT, () => { console.log("SERVER listening on PORT:", PORT) })
    .on("error", (err) => { console.log("SERVER error in setup:", err) });