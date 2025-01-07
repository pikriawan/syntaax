import PostgresAdapter from "@auth/pg-adapter";
import { Pool } from "@neondatabase/serverless";
import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth(() => {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });

    return {
        adapter: PostgresAdapter(pool),
        session: { strategy: "jwt" },
        ...authConfig
    };
});
