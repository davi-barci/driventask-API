import { Task } from "../protocols/protocols";
import * as taskRepository from "../repositories/tasks.repository";


export async function createTask(data: Task): Promise<void>{
    await taskRepository.createTask(data);
}
  