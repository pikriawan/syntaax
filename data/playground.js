import { getUser } from "./user";
import sql from "@/lib/sql";

export async function list() {
    const user = await getUser();

    if (!user) {
        return null;
    }

    const playgrounds = await sql`
        SELECT id, name, created_at, updated_at
        FROM playgrounds
        WHERE user_id = (
            SELECT id
            FROM users
            WHERE id = ${user.id}
        )
        ORDER BY updated_at DESC;
    `;

    return playgrounds;
}

export async function get(id) {
    const user = await getUser();

    if (!user) {
        return null;
    }

    const playgrounds = await sql`
        SELECT id, name, created_at, updated_at
        FROM playgrounds
        WHERE id = ${id}
        AND user_id = (
            SELECT id
            FROM users
            WHERE id = ${user.id}
        );
    `;

    return playgrounds[0] || null;
}
