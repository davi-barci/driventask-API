import { Task } from "../protocols/protocols";
import * as taskRepository from "../repositories/tasks.repository";


export async function createTask(data: Task): Promise<void>{
    await taskRepository.createTask(data);
}

export async function getAllTasksById(userId: number): Promise<Task[] | null>{
    const result = await taskRepository.getAllTasksById(userId);
    return result;
}