"use server";

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
                name: "Name already used."
            }
        };
    }

    await sql`
        INSERT INTO projects(public_id, name, html_url, css_url, js_url, user_id)
        VALUES(${nanoid()}, ${rawData.name}, NULL, NULL, NULL, (
            SELECT id
            FROM users
            WHERE public_id = ${user.public_id}
        ));
    `;

    revalidatePath("/");
    redirect(`/project/${rawData.name}`);
}
