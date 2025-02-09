"use client";

import { useContext } from "react";
import CSSEditor from "./css-editor";
import HTMLEditor from "./html-editor";
import SpinnerIcon from "./icons/spinner-icon";
import JSEditor from "./js-editor";
import Tab from "./ui/tab";
import TabPanel from "./ui/tab-panel";
import TabProvider from "./ui/tab-provider";
import PlaygroundEditorContext from "@/contexts/playground-editor-context";

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
