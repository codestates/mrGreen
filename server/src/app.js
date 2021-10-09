const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("../models");

const fs =require("fs");
const logger = require("morgan");

const PORT = 8080;

const app = express();



app.use(
  cors({
    origin: ['https://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS']
  })
);
app.use(logger("dev"));
// app.use("/plantlist", plantListRouter);


// const plantListRouter = require("./routers/plantListRouter");
// const userRouter = require("./routers/userRouter");
// const authRouter = require("./routers/auth");


app.get("/", (req, res) => {
  return res.send("GET request to the homepage");
});

app.post("/signup", (req,res) => {
    if (req.body.email) {
     return res.send("success")
    }
    else {
        return res.send("fail")
    }
});

// app.use("/user", userRouter);
// app.use("/auth", authRouter);


const server = app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});






