import { z } from "zod";

export const ProjectFormSchema = z.object({
    name: z
        .string()
        .min(5, { message: "Name must be at least 5 characters long." })
        .regex(/^[a-zA-Z0-9\s_-]+$/, { message: "Name must not contain special characters." })
        .trim()
});
