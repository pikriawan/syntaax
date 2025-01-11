import { neon } from "@neondatabase/serverless";
import { auth } from "./auth";

export async function getUser() {
    const session = await auth();

    if (!session) {
        return null;
    }

    const sql = neon(process.env.DATABASE_URL);
    const userId = (await sql`
        SELECT id
        FROM users
        WHERE email = ${session.user.email};
    `)[0].id;

    return { id: userId, ...session.user };
}
