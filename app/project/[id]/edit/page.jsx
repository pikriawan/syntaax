import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ProjectEditor from "@/components/project-editor";
import ProjectEditorProvider from "@/components/project-editor-provider";
import ProjectOption from "@/components/project-option";
import ProjectPlayButton from "@/components/project-play-button";
import ProjectPreview from "@/components/project-preview";
import ProjectPreviewLink from "@/components/project-preview-link";
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
                <div className="w-full h-14 px-4 flex items-center justify-between shadow-[0_-0.0625rem_#27272A_inset]">
                    <div className="flex items-center gap-4">
                        <Link href="/projects">
                            <ChevronLeftIcon className="w-6 h-6" />
                        </Link>
                        <h1 className="font-bold text-2xl">{project.name}</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <ProjectPlayButton />
                        <ProjectPreviewLink className="hidden md:inline" />
                        <ProjectOption project={project} className="static top-[unset] right-[unset]" />
                    </div>
                </div>
                <div className="w-full h-[calc(100%-3.5rem)] md:grid md:grid-rows-1 md:grid-cols-[1fr_auto_1fr]">
                    <ProjectEditor />
                    <div className="w-[0.0625rem] h-full hidden bg-zinc-800 md:block" />
                    <ProjectPreview />
                </div>
            </div>
        </ProjectEditorProvider>
    );
}
