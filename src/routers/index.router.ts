import { Router } from "express";
import usersRouter from "./users.router";
import taskRouter from "./tasks.router";

const router = Router();

router.use(usersRouter);
router.use(taskRouter);
router.all("*", (_req, res) => res.status(404).send({ message: "Not Found" }));

export default router;