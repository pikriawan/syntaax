"use client";

import { PlayIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { editFile } from "@/actions/playground";
import PlaygroundEditorContext from "@/contexts/playground-editor-context";

export default function PlaygroundRun() {
    const {
        playground,
        fetching,
        pushing,
        setPushing,
        setMobilePreviewOpen,
        html,
        css,
        js,
        previewIFrameRef,
        reloadPreviewIFrame
    } = useContext(PlaygroundEditorContext);

    async function onClick() {
        setMobilePreviewOpen(true);
        setPushing(true);

        const htmlFormData = new FormData();
        htmlFormData.append("id", playground.id);
        htmlFormData.append("file", "index.html");
        htmlFormData.append("data", html);

        const cssFormData = new FormData();
        cssFormData.append("id", playground.id);
        cssFormData.append("file", "style.css");
        cssFormData.append("data", css);

        const jsFormData = new FormData();
        jsFormData.append("id", playground.id);
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
