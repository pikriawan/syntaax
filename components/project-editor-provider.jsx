"use client";

import { useState, useEffect, useRef } from "react";
import ProjectEditorContext from "@/contexts/project-editor-context";

export default function ProjectEditorProvider({ project, children }) {
    const [fetching, setFetching] = useState(true);
    const [pushing, setPushing] = useState(false);
    const [mobilePreviewOpen, setMobilePreviewOpen] = useState(false);
    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");
    const previewIFrameRef = useRef(null);

    function reloadPreviewIFrame() {
        previewIFrameRef.current.contentWindow.location.reload();
    }

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

            setFetching(false);
        }

        fetchFiles();
    }, []);

    return (
        <ProjectEditorContext.Provider value={{
            project,
            fetching,
            pushing,
            setPushing,
            mobilePreviewOpen,
            setMobilePreviewOpen,
            html,
            setHtml,
            css,
            setCss,
            js,
            setJs,
            previewIFrameRef,
            reloadPreviewIFrame
        }}>
            {children}
        </ProjectEditorContext.Provider>
    );
}
