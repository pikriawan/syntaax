"use client";

import { useState, useEffect } from "react";
import ProjectEditorContext from "@/contexts/project-editor-context";

export default function ProjectEditorProvider({ project, children }) {
    const [src, setSrc] = useState();
    const [loaded, setLoaded] = useState(false);
    const [pending, setPending] = useState(false);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");

    useEffect(() => {
        async function fetchFiles() {
            const responses = await Promise.all([
                fetch(`/project/${project.public_id}/files/index.html`),
                fetch(`/project/${project.public_id}/files/style.css`),
                fetch(`/project/${project.public_id}/files/script.js`)
            ]);

            const datas = await Promise.all(responses.map((response) => response.text()));

            setHtml(datas[0]);
            setCss(datas[1]);
            setJs(datas[2]);

            setLoaded(true);
        }

        fetchFiles();
    }, []);

    return (
        <ProjectEditorContext.Provider value={{
            project,
            src,
            setSrc,
            loaded,
            pending,
            setPending,
            previewOpen,
            setPreviewOpen,
            html,
            setHtml,
            css,
            setCss,
            js,
            setJs
        }}>
            {children}
        </ProjectEditorContext.Provider>
    );
}
