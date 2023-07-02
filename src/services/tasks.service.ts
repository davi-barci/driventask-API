import { Task } from "@/protocols/protocols";
import * as taskRepository from "@/repositories/tasks.repository";
import * as errors from "@/errors/index.errors";

export async function createTask(data: Task): Promise<void>{
    await taskRepository.createTask(data);
}

export async function getAllTasksById(userId: number): Promise<Task[] | null>{
    const result = await taskRepository.getAllTasksById(userId);
    return result;
}

export async function updateTask(data: Task, idTask: number): Promise<Task>{
    const result = await taskRepository.updateTask(data, idTask);
    if (!result) throw errors.notFound();
    return result;
}

export async function deleteTask(idTask: number): Promise<void>{
    const result = await taskRepository.deleteTask(idTask);
    if (result === 0) throw errors.notFound();
}