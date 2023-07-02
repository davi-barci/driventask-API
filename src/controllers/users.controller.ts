import { Request, Response } from "express";
import * as userService from "@/services/users.service";
import httpStatus from "http-status";

export async function signUp(req: Request, res: Response): Promise<void> {
  await userService.signUp({ ...req.body });
  res.sendStatus(httpStatus.CREATED);
}

export async function signIn(req: Request, res: Response): Promise<void> {
  const token = await userService.signIn({ ...req.body });
  res.send(token).status(httpStatus.OK);
}

