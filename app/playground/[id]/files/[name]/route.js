import mime from "mime";
import sql from "@/lib/sql";

export async function GET(req, { params }) {
    const id = (await params).id;
    const name = (await params).name;

    const exists = (await sql`
        SELECT
        FROM playgrounds
        WHERE id = ${id};
    `).length !== 0;

    if (!exists) {
        return new Response(null, {
            status: 404
        });
    }

    let data;

    switch (name) {
        case "index.html":
            data = (await sql`
                SELECT html
                FROM playgrounds
                WHERE id = ${id};
            `)[0].html;
            break;
        case "style.css":
            data = (await sql`
                SELECT css
                FROM playgrounds
                WHERE id = ${id};
            `)[0].css;
            break;
        case "script.js":
            data = (await sql`
                SELECT js
                FROM playgrounds
                WHERE id = ${id};
            `)[0].js;
            break;
        default:
            return new Response(null, {
                status: 404
            });
    }

    return new Response(data, {
        headers: {
            "Content-Type": mime.getType(name)
        }
    });
}
