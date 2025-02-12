"use client";

import { css as cssLang } from "@codemirror/lang-css";
import { html as htmlLang } from "@codemirror/lang-html";
import { javascript as jsLang } from "@codemirror/lang-javascript";
import { EditorView } from "@codemirror/view";
import { useCallback, useContext, useRef } from "react";
import Editor from "./editor";
import SpinnerIcon from "./icons/spinner-icon";
import Tab from "./ui/tab";
import TabPanel from "./ui/tab-panel";
import TabProvider from "./ui/tab-provider";
import PlaygroundEditorContext from "@/contexts/playground-editor-context";

function HTMLEditor({ className }) {
    const { html, setHtml } = useContext(PlaygroundEditorContext);
    const defaultValueRef = useRef(html);

    const onChange = useCallback((value) => {
        setHtml(value);
    }, [setHtml]);

    return (
        <Editor
            className={className}
            extensions={[
                EditorView.theme({
                    "&": {
                        height: "100%"
                    },
                    ".cm-scroller": {
                        overflow: "auto"
                    }
                }),
                htmlLang()
            ]}
            defaultValue={defaultValueRef.current}
            onChange={onChange}
        />
    );
}

function CSSEditor({ className }) {
    const { css, setCss } = useContext(PlaygroundEditorContext);
    const defaultValueRef = useRef(css);

    const onChange = useCallback((value) => {
        setCss(value);
    }, [setCss]);

    return (
        <Editor
            className={className}
            extensions={[
                EditorView.theme({
                    "&": {
                        height: "100%"
                    },
                    ".cm-scroller": {
                        overflow: "auto"
                    }
                }),
                cssLang()
            ]}
            defaultValue={defaultValueRef.current}
            onChange={onChange}
        />
    );
}

function JSEditor({ className }) {
    const { js, setJs } = useContext(PlaygroundEditorContext);
    const defaultValueRef = useRef(js);

    const onChange = useCallback((value) => {
        setJs(value);
    }, [setJs]);

    return (
        <Editor
            className={className}
            extensions={[
                EditorView.theme({
                    "&": {
                        height: "100%"
                    },
                    ".cm-scroller": {
                        overflow: "auto"
                    }
                }),
                jsLang()
            ]}
            defaultValue={defaultValueRef.current}
            onChange={onChange}
        />
    );
}

export default function PlaygroundEditor() {
    const { fetching } = useContext(PlaygroundEditorContext);

    return (
        <div className="grid grid-rows-[auto_1fr] grid-cols-1 h-full">
            <TabProvider>
                <div className="p-4 shadow-[0_-0.0625rem_#27272A_inset] w-full flex gap-4">
                    <Tab className="w-full" index={0}>
                        HTML
                    </Tab>
                    <Tab className="w-full" index={1}>
                        CSS
                    </Tab>
                    <Tab className="w-full" index={2}>
                        JS
                    </Tab>
                </div>
                <div className="w-full overflow-y-auto">
                    {fetching ? (
                        <div className="w-full h-full bg-zinc-950 flex justify-center items-center">
                            <SpinnerIcon className="animate-spin" />
                        </div>
                    ) : (
                        <>
                            <TabPanel className="w-full h-full" index={0}>
                                <HTMLEditor className="w-full h-full" />
                            </TabPanel>
                            <TabPanel className="w-full h-full" index={1}>
                                <CSSEditor className="w-full h-full" />
                            </TabPanel>
                            <TabPanel className="w-full h-full" index={2}>
                                <JSEditor className="w-full h-full" />
                            </TabPanel>
                        </>
                    )}
                </div>
            </TabProvider>
        </div>
    );
}
