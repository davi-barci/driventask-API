import { Request, Response } from "express";
import * as taskService from "../services/tasks.service";
import httpStatus from "http-status";

export async function createTask(req: Request, res: Response): Promise<void> {
    await taskService.createTask({ ...req.body, userId: res.locals.userId});
    res.sendStatus(httpStatus.CREATED);
}

export async function getAllTasksById(_req: Request, res: Response): Promise<void> {
    const tasks = await taskService.getAllTasksById(res.locals.userId);
    res.send(tasks).status(httpStatus.OK);
}

export async function updateTask(req: Request, res: Response): Promise<void> {
    const {id} = req.params;
    const newTask = await taskService.updateTask({ ...req.body, userId: res.locals.userId}, Number(id));
    res.send(newTask).status(httpStatus.OK);
}

export async function deleteTask(req: Request, res: Response): Promise<void> {
    const {id} = req.params;
    await taskService.deleteTask(Number(id));
    res.sendStatus(httpStatus.OK);
}