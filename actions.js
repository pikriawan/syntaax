"use server";

import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";
import { getUser } from "./users";

export async function createProject(prevState, formData) {
    const rawData = { name: formData.get("name") };
    const user = await getUser();

    if (!user) {
        return {
            success: false,
            message: "Unauthenticated",
            inputs: rawData
        };
    }

    if (rawData.name.length < 5) {
        return {
            success: false,
            message: "Name must be at least 4 characters long",
            inputs: rawData
        };
    }

    const sql = neon(process.env.DATABASE_URL);
    const exists = (await sql`
        SELECT name
        FROM projects
        WHERE name = ${rawData.name};
    `).length > 0;

    if (exists) {
        return {
            success: false,
            message: "Name already exists",
            inputs: rawData
        };
    }

    await sql`
        INSERT INTO projects(name, html_url, css_url, js_url, user_id)
        VALUES(${rawData.name}, '', '', '', ${user.id});
    `;

    revalidatePath("/");

    return {
        success: true,
        message: "",
        inputs: null
    }
}
