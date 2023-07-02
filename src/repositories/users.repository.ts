import db from "../configs/database.connection";
import { User, UserSignUp } from "../protocols/protocols";

export async function createUser({ name, email, password }: UserSignUp): Promise<void> {
  await db.query(
    `
    INSERT INTO
        users (
            name,
            email,
            password
        )
    VALUES ($1, $2, $3);
    `,
    [name, email, password]
  );
}

export async function findUserByEmail(email: string): Promise<User | null> {
  const result = await db.query<User>(`SELECT * FROM users WHERE email = $1;`, [email]);
  return result.rows[0] || null;
}

export async function createSession(userId: number, token: string): Promise<boolean> {
  const result = await db.query(`INSERT INTO sessions (id_user, token) VALUES ($1, $2);`, [userId, token]);
  return result.rowCount > 0;
}
