import { z } from "zod";

export const ProjectFormSchema = z.object({
    name: z
        .string()
        .min(5, { message: "Be at least 5 characters long." })
        .regex(/^[a-zA-Z0-9\s_-]+$/, { message: "Not contain special characters." })
        .trim()
});
