"use server";

import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";
import { getUser } from "./user";

export async function createProject(state, formData) {
    const rawData = { name: formData.get("name") };
    const user = await getUser();

    if (!user) {
        return {
            success: false,
            message: "Unauthenticated",
        };
    }

    if (rawData.name.length < 5) {
        return {
            success: false,
            message: "Name must be at least 4 characters long",
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
    }
}

export async function editProjectMetadata(state, formData) {
    const rawData = {
        id: formData.get("id"),
        name: formData.get("name")
    };
    const user = await getUser();

    if (!user) {
        return {
            success: false,
            message: "Unauthenticated"
        };
    }

    const sql = neon(process.env.DATABASE_URL);
    const exists = (await sql`
        SELECT id
        FROM projects
        WHERE id = ${rawData.id};
    `).length > 0;

    if (!exists) {
        return {
            success: false,
            message: "Project not found",
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

    const nameExists = (await sql`
        SELECT name
        FROM projects
        WHERE name = ${rawData.name};
    `).length > 0;

    if (nameExists) {
        return {
            success: false,
            message: "Name already exists"
        };
    }

    await sql`
        UPDATE projects
        SET name = ${rawData.name}
        WHERE id = ${rawData.id};
    `;

    revalidatePath("/");

    return {
        success: true,
        message: ""
    }
}
