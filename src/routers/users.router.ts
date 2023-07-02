import { Router } from "express";
import * as userController from "@/controllers/users.controller";
import * as userSchema from "@/schemas/user.schema"
import validateSchema from "@/middlewares/validateSchema.middleware";

const usersRouter = Router();

usersRouter.post("/users/signup", validateSchema(userSchema.signUp), userController.signUp);
usersRouter.post("/users/signin", validateSchema(userSchema.signIn), userController.signIn);

export default usersRouter;