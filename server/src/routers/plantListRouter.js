import express from "express";

const plantListRouter = express.Router();

plantListRouter.get("/")
plantListRouter.get("/plantlist", handleHome);

export default plantListRouter;