"use client";

import { ArrowTopRightOnSquareIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useContext } from "react";
import ProjectEditorContext from "@/contexts/project-editor-context";
import useMobile from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

function ProjectPreviewContainer({ children }) {
    const {
        project,
        previewOpen,
        setPreviewOpen
    } = useContext(ProjectEditorContext);
    const mobile = useMobile();

    if (mobile === true) {
        return (
            <div className={cn("bg-white fixed top-0 left-0 w-full h-full", previewOpen ? "block" : "hidden")}>
                <div className="bg-zinc-950 w-full h-14 flex items-center justify-end gap-4 px-4 shadow-[0_-0.0625rem_#27272A_inset]">
                    <Link href={`/project/${project.public_id}/files/index.html`}>
                        <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                    </Link>
                    <button onClick={() => setPreviewOpen(false)}>
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>
                {children}
            </div>
        );
    } else if (mobile === false) {
        return (
            <div className="bg-white w-1/2 h-full">
                {children}
            </div>
        )
    }
}

export default function ProjectPreview() {
    const { src } = useContext(ProjectEditorContext);

    return (
        <ProjectPreviewContainer>
            <iframe src={src} className="w-full h-full" />
        </ProjectPreviewContainer>
    );
}
