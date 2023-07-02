import { Request, Response } from "express";
import * as taskService from "../services/tasks.service";
import httpStatus from "http-status";

export async function createTask(req: Request, res: Response): Promise<void> {
    await taskService.createTask({ ...req.body, userId: res.locals.userId});
    res.sendStatus(httpStatus.CREATED);
}