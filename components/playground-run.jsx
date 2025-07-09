"use client";

import { Play } from "lucide-react";
import { useContext, useEffect, useCallback } from "react";
import { editFile, updateTimestamp } from "@/actions/playground";
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

    const run = useCallback(async () => {
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

        const timestampFormData = new FormData();
        timestampFormData.append("id", playground.id);
        updateTimestamp(timestampFormData);

        reloadPreviewIFrame();

        function onReload() {
            setPushing(false);
            previewIFrameRef.current.removeEventListener("load", onReload);
        }

        previewIFrameRef.current.addEventListener("load", onReload);
    }, [
        css,
        html,
        js,
        playground.id,
        previewIFrameRef,
        reloadPreviewIFrame,
        setMobilePreviewOpen,
        setPushing
    ]);

    useEffect(() => {
        async function onKeyDown(event) {
            if (event.ctrlKey && event.key === "Enter") {
                event.preventDefault();

                if (!fetching && !pushing) {
                    await run();
                }
            }
        }

        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [fetching, pushing, run]);

    return (
        <button onClick={run} disabled={fetching || pushing} title="Run [Ctrl + Enter]">
            <Play size={20} />
        </button>
    );
}
