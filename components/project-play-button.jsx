"use client";

import { PlayIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { editFile } from "@/actions/project";
import ProjectEditorContext from "@/contexts/project-editor-context";

export default function ProjectPlayButton() {
    const {
        project,
        fetching,
        pushing,
        setPushing,
        setMobilePreviewOpen,
        html,
        css,
        js,
        previewIFrameRef,
        reloadPreviewIFrame
    } = useContext(ProjectEditorContext);

    async function onClick() {
        setMobilePreviewOpen(true);
        setPushing(true);

        const htmlFormData = new FormData();
        htmlFormData.append("public_id", project.public_id);
        htmlFormData.append("file", "index.html");
        htmlFormData.append("data", html);

        const cssFormData = new FormData();
        cssFormData.append("public_id", project.public_id);
        cssFormData.append("file", "style.css");
        cssFormData.append("data", css);

        const jsFormData = new FormData();
        jsFormData.append("public_id", project.public_id);
        jsFormData.append("file", "script.js");
        jsFormData.append("data", js);

        await Promise.all([
            editFile(htmlFormData),
            editFile(cssFormData),
            editFile(jsFormData)
        ]);

        reloadPreviewIFrame();

        function onReload() {
            setPushing(false);
            previewIFrameRef.current.removeEventListener("load", onReload);
        }

        previewIFrameRef.current.addEventListener("load", onReload);
    }

    return (
        <button onClick={onClick} disabled={fetching || pushing}>
            <PlayIcon className="w-6 h-6" />
        </button>
    );
}
