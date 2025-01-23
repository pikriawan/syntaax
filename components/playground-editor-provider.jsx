"use client";

import { useState, useEffect, useRef } from "react";
import PlaygroundEditorContext from "@/contexts/playground-editor-context";

export default function PlaygroundEditorProvider({ playground, children }) {
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
                fetch(`/playground/${playground.id}/files/index.html`),
                fetch(`/playground/${playground.id}/files/style.css`),
                fetch(`/playground/${playground.id}/files/script.js`)
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
        <PlaygroundEditorContext.Provider value={{
            playground,
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
        </PlaygroundEditorContext.Provider>
    );
}
