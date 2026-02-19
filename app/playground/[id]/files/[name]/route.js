import mime from "mime";
import sql from "@/lib/sql";

export async function GET(req, { params }) {
    const id = (await params).id;
    const name = (await params).name;

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
    }

    console.log(data);

    if (data === null) {
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
