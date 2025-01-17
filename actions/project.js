"use server";

import { put, del as delBlob } from "@vercel/blob";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getUser } from "@/data/user";
import { ProjectFormSchema } from "@/lib/definitions";
import sql from "@/lib/sql";
import { parseFormData } from "@/lib/utils";

export async function create(formData) {
    const user = await getUser();

    if (!user) {
        return {
            success: false,
            message: "Unauthenticated.",
            errors: null
        };
    }

    const rawData = parseFormData(formData);
    const validatedFields = ProjectFormSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            success: false,
            message: null,
            errors: validatedFields.error.flatten().fieldErrors,
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
            success: false,
            message: null,
            errors: {
                name: ["Name already used."]
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
    redirect(`/project/${publicId}/edit`);
}

export async function editMetadata(formData) {
    const user = await getUser();

    if (!user) {
        return {
            success: false,
            message: "Unauthenticated.",
            errors: null
        };
    }

    const rawData = parseFormData(formData);
    const validatedFields = ProjectFormSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            success: false,
            message: null,
            errors: validatedFields.error.flatten().fieldErrors
        };
    }

    const exists = (await sql`
        SELECT
        FROM projects
        WHERE public_id = ${rawData.public_id}
        AND user_id = (
            SELECT id
            FROM users
            WHERE public_id = ${user.public_id}
        );
    `).length !== 0;

    if (!exists) {
        return {
            success: false,
            message: "Project not found.",
            errors: null
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
            success: false,
            message: null,
            errors: {
                name: ["Name already used."]
            }
        };
    }

    await sql`
        UPDATE projects
        SET name = ${rawData.name}, updated_at = CURRENT_TIMESTAMP
        WHERE public_id = ${rawData.public_id}
    `;

    revalidatePath("/");

    return {
        success: true,
        message: null,
        errors: null
    };
}

export async function del(formData) {
    const user = await getUser();

    if (!user) {
        return {
            success: false,
            message: "Unauthenticated.",
            errors: null
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
            success: false,
            message: "Project not found.",
            errors: null
        };
    }

    await delBlob([
        existingProject.html_url,
        existingProject.css_url,
        existingProject.js_url,
        rawData.public_id
    ]);

    await sql`
        DELETE
        FROM projects
        WHERE public_id = ${rawData.public_id};
    `;

    revalidatePath("/");

    return {
        success: true,
        message: null,
        errors: null
    };
}
