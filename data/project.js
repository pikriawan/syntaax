import { getUser } from "./user";
import sql from "@/lib/sql";

export async function listProjects() {
    const user = await getUser();

    if (!user) {
        return null;
    }

    const projects = await sql`
        SELECT public_id, name, html_url, css_url, js_url, created_at, updated_at
        FROM projects
        WHERE user_id = (
            SELECT id
            FROM users
            WHERE public_id = ${user.public_id}
        )
        ORDER BY updated_at DESC;
    `;

    return projects;
}
