import Link from "next/link";
import ProjectOption from "./project-option";
import { listProjects } from "@/data/project"
import { timeAgo } from "@/lib/utils";

export default async function ProjectList() {
    const projects = await listProjects();

    return projects?.length ? projects.map((project) => (
        <div className="bg-zinc-950 shadow-[0_0_0_0.0625rem_#27272A_inset] p-4 rounded-lg relative">
            <Link
                key={project.public_id}
                href={`/project/${project.name}`}
                className="flex flex-col gap-4"
            >
                <h2 className="text-2xl font-bold">{project.name}</h2>
                <p>{timeAgo(project.updated_at)}</p>
            </Link>
            <ProjectOption projectName={project.name} />
        </div>
    )) : (
        <p>You don't have any projects yet.</p>
    );
}
