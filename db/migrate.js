const { neon } = require("@neondatabase/serverless");
require("dotenv").config();

const sql = neon(process.env.DATABASE_URL);

async function migrate() {
    await sql`
        CREATE TABLE IF NOT EXISTS users(
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            name VARCHAR NOT NULL,
            email VARCHAR UNIQUE NOT NULL,
            image TEXT
        );
    `;
    
    await sql`
        CREATE TABLE IF NOT EXISTS playgrounds(
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id UUID NOT NULL REFERENCES users(id),
            name VARCHAR NOT NULL,
            html TEXT,
            css TEXT,
            js TEXT,
            created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
        );
    `;

    console.log("Migration successful");
}

migrate();
