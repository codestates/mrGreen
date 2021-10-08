import express from "express";

const userRouter = express.Router();

const handleUser = (req,res) => res.send("User info");

userRouter.get("/user/", handleUser);

export default userRouter;