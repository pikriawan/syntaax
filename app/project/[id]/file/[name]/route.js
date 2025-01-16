import { getProject } from "@/data/project";

export async function GET(req, { params }) {
    const id = (await params).id;
    const name = (await params).name;
    const project = await getProject(id);

    if (!project) {
        return new Response("Project not found", { status: 404 });
    }

    const response = await fetch(`https://fb7tqbynf50dwvue.public.blob.vercel-storage.com/${id}/${name}`);
    const content = await response.text();
    const type = response.headers.get("Content-Type");

    return new Response(content, {
        headers: {
            "Content-Type": type
        }
    });
}
