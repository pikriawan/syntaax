"use server";

import { put, del } from "@vercel/blob";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getUser } from "@/data/user";
import { ProjectFormSchema } from "@/lib/definitions";
import sql from "@/lib/sql";
import { parseFormData } from "@/lib/utils";

export async function createProject(state, formData) {
    const user = await getUser();

    if (!user) {
        return {
            message: "Unauthenticated."
        };
    }

    const rawData = parseFormData(formData);
    const validatedFields = ProjectFormSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            inputs: rawData
        };
    }

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

    const publicId = nanoid();

    const { url: cssUrl } = await put(`${publicId}/style.css`, "\n", {
        access: "public",
        addRandomSuffix: false
    });

    const { url: jsUrl } = await put(`${publicId}/script.js`, "\n", {
        access: "public",
        addRandomSuffix: false
    });

    const { url: htmlUrl } = await put(
        `${publicId}/index.html`,
        "<!DOCTYPE html>\n" +
        "<html>\n" +
        "   <head>\n" +
        "       <meta name=\"viewport\" content=\"width=device-width\">\n" +
        "       <link rel=\"stylesheet\" href=\"style.css\">\n" +
        "   </head>\n" +
        "   <body>\n" +
        "       <script src=\"script.js\"></script>\n" +
        "   </body>\n" +
        "</html>",
        {
            access: "public",
            addRandomSuffix: false
        }
    );

    await sql`
        INSERT INTO projects(
            public_id,
            name,
            html_url,
            css_url,
            js_url,
            user_id
        )
        VALUES(${publicId}, ${rawData.name}, ${htmlUrl}, ${cssUrl}, ${jsUrl}, (
            SELECT id
            FROM users
            WHERE public_id = ${user.public_id}
        ));
    `;

    revalidatePath("/");
    redirect(`/project/${publicId}`);
}

export async function editProjectMetadata(state, formData) {
    const user = await getUser();

    if (!user) {
        return {
            message: "Unauthenticated."
        };
    }

    const rawData = parseFormData(formData);
    const validatedFields = ProjectFormSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            inputs: rawData
        };
    }

    const existingProject = (await sql`
        SELECT public_id
        FROM projects
        WHERE public_id = ${rawData.public_id}
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

    await sql`
        UPDATE projects
        SET name = ${rawData.name}, updated_at = CURRENT_TIMESTAMP
        WHERE public_id = ${existingProject.public_id}
    `;

    revalidatePath("/");
    redirect(`/project/${existingProject.public_id}`);
}

export async function deleteProject(formData) {
    const user = await getUser();

    if (!user) {
        return {
            message: "Unauthenticated."
        };
    }

    const rawData = parseFormData(formData);

    const existingProject = (await sql`
        SELECT public_id, html_url, css_url, js_url
        FROM projects
        WHERE public_id = ${rawData.public_id}
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

    await del([
        existingProject.html_url,
        existingProject.css_url,
        existingProject.js_url,
        existingProject.public_id
    ]);

    await sql`
        DELETE
        FROM projects
        WHERE public_id = ${existingProject.public_id};
    `;

    revalidatePath("/");
}
