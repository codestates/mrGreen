require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const port = 80;

const userRouter = require("./src/routers/user.js");
const favoriteRouter = require("./src/routers/favorite.js");
const plantlistRouter = require("./src/routers/plantlist.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: `${process.env.CLIENT_URL}`,
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "DELETE", "PATCH"],
  })
);

app.use(cookieParser());
app.use("/plantlist", plantlistRouter);
app.use("/user", userRouter);
app.use("/favorite", favoriteRouter);

app.listen(port, () => {
  console.log(`Server listening ${port}`)
})


