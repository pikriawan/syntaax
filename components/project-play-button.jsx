"use client";

import { PlayIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect } from "react";
import { editFile } from "@/actions/project";
import ProjectEditorContext from "@/contexts/project-editor-context";

export default function ProjectPlayButton() {
    const {
        project,
        setSrc,
        html,
        css,
        js,
        setPending,
        setPreviewOpen
    } = useContext(ProjectEditorContext);

    async function onClick() {
        setPreviewOpen(true);
        setPending(true);

        const htmlFormData = new FormData();
        htmlFormData.append("public_id", project.public_id);
        htmlFormData.append("file", "index.html");
        htmlFormData.append("data", html);
        await editFile(htmlFormData);

        const cssFormData = new FormData();
        htmlFormData.append("public_id", project.public_id);
        htmlFormData.append("file", "style.css");
        htmlFormData.append("data", css);
        await editFile(cssFormData);

        const jsFormData = new FormData();
        htmlFormData.append("public_id", project.public_id);
        htmlFormData.append("file", "script.js");
        htmlFormData.append("data", js);
        await editFile(jsFormData);

        setPending(false);
        setSrc(`/project/${project.public_id}/files/index.html`);
    }

    return (
        <button onClick={onClick}>
            <PlayIcon className="w-6 h-6" />
        </button>
    );
}
