const express = require("express");
const app = express();

const cookiesParser = require("cookie-parser");
const path = require("path");
const db = require('./config/mongoose-connections');
const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/users.Router');
const productsRouter = require('./routes/productsRouter');

// const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(cookiesParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use('/owners', ownersRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)

app.listen(3000);
