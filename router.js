import express from "express";

export const userRouter = express.Router(); // userRouter를 내보낸다. Router로 Route들을 사용하기 위해.

userRouter.get("/", (req, res) => res.send("user index"));
userRouter.get("/edit", (req, res) => res.send("user edit"));
userRouter.get("/password", (req, res) => res.send("user password"));
