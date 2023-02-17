require("dotenv").config();
const express = require("express");
const indexRouter = require("./routes/index.router");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", indexRouter);

app
    .listen(PORT, () => { console.log("SERVER listening on PORT:", PORT) })
    .on("error", (err) => { console.log("SERVER error in setup:", err) });