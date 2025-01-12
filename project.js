import { neon } from "@neondatabase/serverless";
import { getUser } from "./user";

export async function listProjects() {
    const user = await getUser();

    if (!user) {
        return null;
    }

    const sql = neon(process.env.DATABASE_URL);
    const projects = await sql`
        SELECT *
        FROM projects
        WHERE user_id = ${user.id}
        ORDER BY updated_at DESC;
    `;

    return projects;
}

export async function getProject(name) {
    const user = await getUser();

    if (!user) {
        return null;
    }

    const sql = neon(process.env.DATABASE_URL);
    const project = (await sql`
        SELECT *
        FROM projects
        WHERE name = ${name} AND user_id = ${user.id};
    `)[0];

    return project || null;
}
