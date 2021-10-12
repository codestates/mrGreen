const express = require("express");
const app = express();
const port = 80;
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRouter = require("./src/routers/user.js");
const favoriteRouter = require("./src/routers/favorite.js");
const plantlistRouter = require("./src/routers/plantlist.js");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: "",
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
    preflightContinue: true,
  })
);

app.use("/plantlist", plantlistRouter);
// app.use("/user", userRouter);
app.use("/favorite", favoriteRouter);

app.listen(port, () => {
  console.log(`Server listening ${port}`);
});
