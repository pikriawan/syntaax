import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ProjectEditor from "@/components/project-editor";
import ProjectEditorProvider from "@/components/project-editor-provider";
import ProjectOption from "@/components/project-option";
import ProjectPreview from "@/components/project-preview";
import ProjectPlayButton from "@/components/project-play-button";
import { getMetadata } from "@/data/project";

export default async function ProjectPage({ params }) {
    const id = (await params).id;
    const project = await getMetadata(id);

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <ProjectEditorProvider project={project}>
            <div className="w-full h-full flex flex-col">
                <div className="w-full h-14 px-4 flex justify-between items-center shadow-[0_-0.0625rem_#27272A_inset]">
                    <div className="flex items-center gap-4">
                        <Link href="/projects">
                            <ChevronLeftIcon className="w-6 h-6" />
                        </Link>
                        <h1 className="text-2xl font-bold">{project.name}</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <ProjectPlayButton />
                        <ProjectOption
                            publicId={project.public_id}
                            name={project.name}
                            className="static top-[unset] right-[unset]"
                        />
                    </div>
                </div>
                <div className="w-full h-[calc(100%-3.5rem)] flex w-full justify-content-stretch">
                    <ProjectEditor />
                    <ProjectPreview />
                </div>
            </div>
        </ProjectEditorProvider>
    );
}
