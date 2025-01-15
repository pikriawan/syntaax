"use server";

import { put } from "@vercel/blob";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getUser } from "@/data/user";
import { ProjectFormSchema } from "@/lib/definitions";
import sql from "@/lib/sql";
import { parseFormData } from "@/lib/utils";

export async function createProject(state, formData) {
    // Check auth
    const user = await getUser();

    if (!user) {
        return {
            message: "Unauthenticated."
        };
    }

    // Validate form
    const rawData = parseFormData(formData);
    const validatedFields = ProjectFormSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            inputs: rawData
        };
    }

    // Check if the project exists
    const exists = (await sql`
        SELECT
        FROM projects
        WHERE name = ${rawData.name}
        AND user_id = (
            SELECT id
            FROM users
            WHERE public_id = ${user.public_id}
        );
    `).length !== 0;

    if (exists) {
        return {
            errors: {
                name: ["Name already used."],
                inputs: rawData
            }
        };
    }

    // Create project
    const id = nanoid();

    const { url: cssUrl } = await put(`${id}/style.css`, "body {\nfont-family: sans-serif;\n}", { access: "public" });
    const { url: jsUrl } = await put(`${id}/script.js`, "console.log(\"Hello, World!\");", { access: "public" });
    const { url: htmlUrl } = await put(
        `${id}/index.html`,
        `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta name="viewport" content="width=device-width">
                    <link rel="stylesheet" href="${cssUrl}">
                </head>
                <body>
                    <script src="${jsUrl}"></script>
                </body>
            </html>
        `,
        { access: "public" }
    );

    await sql`
        INSERT INTO projects(public_id, name, html_url, css_url, js_url, user_id)
        VALUES(${id}, ${rawData.name}, ${htmlUrl}, ${cssUrl}, ${jsUrl}, (
            SELECT id
            FROM users
            WHERE public_id = ${user.public_id}
        ));
    `;

    revalidatePath("/");
    redirect(`/project/${rawData.name}`);
}

export async function updateProjectMetadata(state, formData) {
    // Check auth
    const user = await getUser();

    if (!user) {
        return {
            message: "Unauthenticated."
        };
    }

    // Validate form
    const rawData = parseFormData(formData);
    const validatedFields = ProjectFormSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            inputs: rawData
        };
    }

    // Check if the project exists
    const existingProject = (await sql`
        SELECT public_id
        FROM projects
        WHERE name = ${rawData["old-name"]}
        AND user_id = (
            SELECT id
            FROM users
            WHERE public_id = ${user.public_id}
        );
    `)[0];

    if (!existingProject) {
        return {
            errors: {
                name: ["Project not found."],
                inputs: rawData
            }
        };
    }

    // Check if the new project name already used
    const nameExists = (await sql`
        SELECT
        FROM projects
        WHERE name = ${rawData.name}
        AND user_id = (
            SELECT id
            FROM users
            WHERE public_id = ${user.public_id}
        );
    `).length !== 0;

    if (nameExists) {
        return {
            errors: {
                name: ["Name already used."],
                inputs: rawData
            }
        };
    }

    // Update project
    await sql`
        UPDATE projects
        SET name = ${rawData.name},
            updated_at = CURRENT_TIMESTAMP
        WHERE public_id = ${existingProject.public_id};
    `;

    revalidatePath("/");
    redirect(`/project/${rawData.name}`);
}
