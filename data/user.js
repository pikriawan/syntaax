import { auth } from "@/lib/auth";
import sql from "@/lib/sql";

export async function getUser() {
    const session = await auth();

    const user = (await sql`
        SELECT id, name, email, image
        FROM users
        WHERE email = ${session?.user?.email};
    `)[0];

    return user || null;
}
