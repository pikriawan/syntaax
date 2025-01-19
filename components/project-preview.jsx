"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { createPortal } from "react-dom";
import SpinnerIcon from "./icons/spinner-icon";
import ProjectPreviewLink from "./project-preview-link";
import ProjectEditorContext from "@/contexts/project-editor-context";
import useMobile from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

function LoadingPlaceholder() {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-zinc-950">
            <div className="w-full h-full bg-zinc-950 flex justify-center items-center">
                <SpinnerIcon className="animate-spin" />
            </div>
        </div>
    );
}

function ProjectPreviewPanel({ children }) {
    const mobile = useMobile();
    const { mobilePreviewOpen, setMobilePreviewOpen } = useContext(ProjectEditorContext);

    if (mobile === null) {
        return;
    }

    if (mobile) {
        if (!fetching) {
            return createPortal(
                <div className={cn("flex-col fixed top-0 left-0 w-full h-full hidden", mobilePreviewOpen && "flex")}>
                    <div className="px-4 shadow-[0_-0.0625rem_#27272A_inset] w-full h-14 bg-zinc-950 flex justify-end items-center gap-4">
                        <ProjectPreviewLink />
                        <button onClick={() => setMobilePreviewOpen(false)}>
                            <XMarkIcon className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="w-full h-[calc(100%-3.5rem)] bg-zinc-50 overflow-auto relative">
                        {children}
                    </div>
                </div>,
                document.body
        );
    }

    return (
        <div className="bg-zinc-50 overflow-auto relative">
            {children}
        </div>
    );
}

export default function ProjectPreview() {
    const { project, loaded, pending, previewIFrameRef } = useContext(ProjectEditorContext);

    return (
        <ProjectPreviewPanel>
            <iframe
                className="w-full h-full"
                src={`/project/${project.public_id}/files/index.html`}
                ref={previewIFrameRef}
            />
            {(!loaded || pending) && <LoadingPlaceholder />}
        </ProjectPreviewPanel>
    );
}
