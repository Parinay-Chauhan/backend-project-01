const express = require("express");
const app = express();
const cookiesParser = require("cookie-parser");
const path = require("path");
const expressSession = require("express-session");
const flash = require("connect-flash");

require('dotenv').config();

const ownersRouter = require('./routes/ownersRouter');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');
const indexRouter = require('./routes/index');

const db = require('./config/mongoose-connections');


// const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiesParser());
app.use(
  expressSession({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
  })
);

app.use(flash());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");


app.use('/', indexRouter)
app.use('/owners', ownersRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
