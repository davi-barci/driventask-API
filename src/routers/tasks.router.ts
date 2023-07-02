import { Router } from "express";
import * as taskController from "../controllers/tasks.controller";
import validateSchema from "../middlewares/validateSchema.middleware";
import * as taskSchema from "../schemas/tasks.schema";
import authValidation from "../middlewares/auth.middleware";

const taskRouter = Router();

taskRouter.post("/task", validateSchema(taskSchema.createTask), authValidation, taskController.createTask);
taskRouter.get("/task", authValidation, taskController.getAllTasksById);
taskRouter.put("/task/:id", validateSchema(taskSchema.updateTask), authValidation, taskController.updateTask);
taskRouter.delete("/task/:id", authValidation, taskController.deleteTask);

export default taskRouter;