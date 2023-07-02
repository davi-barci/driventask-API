import db from "../configs/database.connection";
import { Task } from "../protocols/protocols";

export async function createTask({ title, description, category, dueDate, userId}: Task): Promise<number>{
    const result = await db.query(
        `
        INSERT INTO tasks (title, description, category, due_date, done, id_user)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id;
        `,
        [title, description, category, dueDate, false, userId]
    );

    return result.rows[0].id;
};

export async function getAllTasksById(userId: number): Promise<Task[] | null>{

    const result = await db.query(
        ` SELECT * FROM tasks WHERE id_user = $1;`,[userId]
    );

    return result.rows;
};

export async function updateTask({ title, description, category, dueDate, done, userId}: Task, taskId: number): Promise<Task>{

    const result = await db.query(`
        UPDATE tasks 
        SET 
            title = $1,
            description = $2,
            category = $3,
            due_date = $4,
            done = $5
        WHERE
            id = $6 AND id_user = $7
        RETURNING *
    `, [title, description, category, dueDate, done, taskId, userId]);

    return result.rows[0];
}

export async function deleteTask(idTask: number): Promise<void>{
    await db.query(`DELETE FROM tasks WHERE id = $1`, [idTask]);
}