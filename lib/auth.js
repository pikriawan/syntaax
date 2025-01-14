import { nanoid } from "nanoid";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import sql from "./sql";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    callbacks: {
        async signIn({ user }) {
            const exists = (await sql`
                SELECT
                FROM users
                WHERE email = ${user.email};
            `)[0] !== undefined;

            if (exists) {
                return true;
            }

            let id = nanoid(8);

            async function validateId(id) {
                return (await sql`
                    SELECT
                    FROM users
                    WHERE public_id = ${id};
                `)[0] === undefined;
            }

            while (!(await validateId(id))) {
                id = nanoid(8);
            }

            await sql`
                INSERT INTO users(public_id, name, email, image)
                VALUES(${id}, ${user.name}, ${user.email}, ${user.image});
            `;

            return true;
        }
    }
});
