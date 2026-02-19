"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getUser } from "@/data/user";
import { PlaygroundFormSchema } from "@/lib/definitions";
import sql from "@/lib/sql";
import { parseFormData } from "@/lib/utils";

export async function create(formData) {
    const user = await getUser();

    if (!user) {
        return {
            success: false,
            message: "Unauthorized",
            errors: null
        };
    }

    const rawData = parseFormData(formData);
    const validatedFields = PlaygroundFormSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            success: false,
            message: null,
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const exists = (await sql`
        SELECT
        FROM playgrounds
        WHERE name = ${rawData.name}
        AND user_id = ${user.id};
    `).length !== 0;

    if (exists) {
        return {
            success: false,
            message: null,
            errors: {
                name: ["Name already used"]
            }
        };
    }

    const html = "<!DOCTYPE html>\n" +
        "<html>\n" +
        "    <head>\n" +
        "        <meta name=\"viewport\" content=\"width=device-width\">\n" +
        "        <link rel=\"stylesheet\" href=\"style.css\">\n" +
        "    </head>\n" +
        "    <body>\n" +
        "        <script src=\"script.js\"></script>\n" +
        "    </body>\n" +
        "</html>";
    const css = "";
    const js = "";

    const id = (await sql`
        INSERT INTO playgrounds(name, user_id, html, css, js)
        VALUES(${rawData.name}, ${user.id}, ${html}, ${css}, ${js})
        RETURNING id;
    `)[0].id;

    revalidatePath("/");
    redirect(`/playground/${id}/edit`);
}

export async function editMetadata(formData) {
    const user = await getUser();

    if (!user) {
        return {
            success: false,
            message: "Unauthorized",
            errors: null
        };
    }

    const rawData = parseFormData(formData);
    const validatedFields = PlaygroundFormSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            success: false,
            message: null,
            errors: validatedFields.error.flatten().fieldErrors
        };
    }

    const exists = (await sql`
        SELECT
        FROM playgrounds
        WHERE id = ${rawData.id}
        AND user_id = ${user.id};
    `).length !== 0;

    if (!exists) {
        return {
            success: false,
            message: "Playground not found",
            errors: null
        };
    }

    const nameExists = (await sql`
        SELECT
        FROM playgrounds
        WHERE name = ${rawData.name}
        AND user_id = ${user.id};
    `).length !== 0;

    if (nameExists) {
        return {
            success: false,
            message: null,
            errors: {
                name: ["Name already used"]
            }
        };
    }

    await sql`
        UPDATE playgrounds
        SET name = ${rawData.name}, updated_at = CURRENT_TIMESTAMP
        WHERE id = ${rawData.id};
    `;

    revalidatePath("/");

    return {
        success: true,
        message: null,
        errors: null
    };
}

export async function editFile(formData) {
    const user = await getUser();

    if (!user) {
        return {
            success: false,
            message: "Unauthorized",
            errors: null
        };
    }

    const rawData = parseFormData(formData);

    const exists = (await sql`
        SELECT
        FROM playgrounds
        WHERE id = ${rawData.id}
        AND user_id = ${user.id};
    `).length !== 0;

    if (!exists) {
        return {
            success: false,
            message: "Playground not found",
            errors: null
        };
    }

    switch (rawData.file) {
        case "index.html":
            await sql`
                UPDATE playgrounds
                SET html = ${rawData.data}
                WHERE id = ${rawData.id}
                AND user_id = ${user.id};
            `;
            break;
        case "style.css":
            await sql`
                UPDATE playgrounds
                SET css = ${rawData.data}
                WHERE id = ${rawData.id}
                AND user_id = ${user.id};
            `;
            break;
        case "script.js":
            await sql`
                UPDATE playgrounds
                SET js = ${rawData.data}
                WHERE id = ${rawData.id}
                AND user_id = ${user.id};
            `;
    }

    return {
        success: true,
        message: null,
        errors: null
    };
}

export async function updateTimestamp(formData) {
    const user = await getUser();

    if (!user) {
        return {
            success: false,
            message: "Unauthorized",
            errors: null
        };
    }

    const rawData = parseFormData(formData);

    const exists = (await sql`
        SELECT
        FROM playgrounds
        WHERE id = ${rawData.id}
        AND user_id = ${user.id};
    `).length !== 0;

    if (!exists) {
        return {
            success: false,
            message: "Playground not found",
            errors: null
        };
    }

    await sql`
        UPDATE playgrounds
        SET updated_at = CURRENT_TIMESTAMP
        WHERE id = ${rawData.id};
    `;

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
            message: "Unauthorized",
            errors: null
        };
    }

    const rawData = parseFormData(formData);

    const existingPlayground = (await sql`
        SELECT id
        FROM playgrounds
        WHERE id = ${rawData.id}
        AND user_id = ${user.id};
    `)[0];

    if (!existingPlayground) {
        return {
            success: false,
            message: "Playground not found",
            errors: null
        };
    }

    await sql`
        DELETE
        FROM playgrounds
        WHERE id = ${rawData.id};
    `;

    revalidatePath("/");

    return {
        success: true,
        message: null,
        errors: null
    };
}
