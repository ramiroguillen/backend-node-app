require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const handlebars = require("express-handlebars");
const indexRouter = require("./routes/index.router");
const viewsRouter = require("./routes/views/views.router");

const PORT = process.env.PORT || 8080;
const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine({
    defaultLayout: "main",
    extname: ".handlebars",
}));
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use("/api", indexRouter);
app.use("/", viewsRouter);

io.on("connection", socket => {
    socket.emit("products", Products.getAll());
    socket.on("new-product", (data) => {
        Products.createNew(data);
        io.sockets.emit("products", Products.getAll());
    });
});

httpServer
    .listen(PORT, () => { console.log("SERVER listening on PORT:", PORT) })
    .on("error", (err) => { console.log("SERVER error in setup:", err) });