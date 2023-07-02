import db from "../configs/database.connection";
import { SignUpData } from "../protocols/protocols";

export async function createUser({ name, email, password }: SignUpData): Promise<void> {
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
