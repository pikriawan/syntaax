import { z } from "zod";

export const PlaygroundFormSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters long" })
        .regex(/^[a-zA-Z0-9\s_-]+$/, { message: "Name must not contain special characters" })
        .trim()
});
