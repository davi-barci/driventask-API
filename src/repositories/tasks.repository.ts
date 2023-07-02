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