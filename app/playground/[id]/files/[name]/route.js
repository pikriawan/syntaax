import mime from "mime";
import redis from "@/lib/redis";

export async function GET(req, { params }) {
    const id = (await params).id;
    const name = (await params).name;

    const data = await redis.get(`${id}/${name}`);

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
