import Link from "next/link";
import ProjectOption from "./project-option";
import { list } from "@/data/project"
import { timeAgo } from "@/lib/utils";

export default async function ProjectList() {
    const projects = await list();

    return projects?.length ? projects.map((project) => (
        <div key={project.public_id} className="bg-zinc-950 shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-lg relative hover:bg-zinc-900">
            <Link href={`/project/${project.public_id}/edit`} className="p-4 flex flex-col gap-4">
                <h2 className="text-2xl font-bold">{project.name}</h2>
                <p>{timeAgo(project.updated_at)}</p>
            </Link>
            <ProjectOption publicId={project.public_id} name={project.name} />
        </div>
    )) : (
        <p>You don&apos;t have any projects yet.</p>
    );
}
