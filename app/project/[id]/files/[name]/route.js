export async function GET(req, { params }) {
    const id = (await params).id;
    const name = (await params).name;

    const response = await fetch(`${process.env.BLOB_URL}/${id}/${name}`);
    const data = await response.text();

    return new Response(data, {
        status: response.status,
        headers: {
            "Content-Type": response.headers.get("Content-Type"),
            "Content-Disposition": "inline"
        }
    });
}
