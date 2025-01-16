import { getProject } from "@/data/project";

export default async function ProjectPage({ params }) {
    const id = (await params).id;
    const project = await getProject(id);

    if (!project) {
        return <p>Project not found</p>;
    }

    return <p>{project.name}</p>;
}
