import joi, { Schema } from "joi";
import { Task } from "protocols/protocols";

export const createTask: Schema<Omit<Task, "userId">> = joi.object({
  title: joi.string().trim().min(3).required(),
  description: joi.string().trim().min(3).required(),
  category: joi.string().trim().min(3).required(),
  dueDate: joi.date().optional(),
});

export const updateTask: Schema<Omit<Task, "userId">> = joi.object({
  title: joi.string().trim().min(3).required(),
  description: joi.string().trim().min(3).required(),
  category: joi.string().trim().min(3).required(),
  dueDate: joi.date().optional(),
  done: joi.boolean().required(),
});