import { ChevronLeftIcon, PlayIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ProjectOption from "@/components/project-option";
import { getProject } from "@/data/project";

export default async function ProjectPage({ params }) {
    const id = (await params).id;
    const project = await getProject(id);

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <div className="w-full h-14 px-4 flex justify-between items-center shadow-[0_-0.0625rem_#27272A_inset]">
            <div className="flex items-center gap-4">
                <Link href="/projects">
                    <ChevronLeftIcon className="w-6 h-6" />
                </Link>
                <h1 className="text-2xl font-bold">{project.name}</h1>
            </div>
            <div className="flex items-center gap-4">
                <button>
                    <PlayIcon className="w-6 h-6" />
                </button>
                <ProjectOption
                    publicId={project.public_id}
                    name={project.name}
                    className="static top-[unset] right-[unset]"
                />
            </div>
        </div>
    );
}
