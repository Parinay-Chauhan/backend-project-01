const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const cookiesParser = require("cookie-parser");
const path = require("path");

app.set("view engine", "ejs");
app.use(cookiesParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT);
