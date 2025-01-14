"use server";

import { ProjectFormSchema } from "@/lib/definitions";
import { parseFormData } from "@/lib/utils";

export async function createProject(state, formData) {
    const rawData = parseFormData(formData);
    const validatedFields = ProjectFormSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            inputs: rawData
        };
    }
}
