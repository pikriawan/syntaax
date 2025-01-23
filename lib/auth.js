import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import sql from "./sql";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    trustHost: true,
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

            await sql`
                INSERT INTO users(name, email, image)
                VALUES(${user.name}, ${user.email}, ${user.image});
            `;

            return true;
        }
    }
});
