import express from "express";
import morgan from "morgan";
import plantListRouter from "./src/routers/plantListRouter";
import userRouter from "./src/routers/userRouter";

const PORT = 8080;

const app = express();
const logger = morgan("dev");

app.use("/plantlist", plantListRouter);
app.use("user", userRouter);



const server = (PORT, () => {
    console.log(`server listening on ${PORT}` )
});

app.listen(PORT, server);
