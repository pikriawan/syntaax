import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import PlaygroundEditor from "@/components/playground-editor";
import PlaygroundEditorProvider from "@/components/playground-editor-provider";
import PlaygroundOption from "@/components/playground-option";
import PlaygroundRun from "@/components/playground-run";
import PlaygroundPreview from "@/components/playground-preview";
import PlaygroundLink from "@/components/playground-link";
import { get } from "@/data/playground";

export const viewport = {
    interactiveWidget: "overlays-content"
};

export async function generateMetadata({ params }) {
    const id = (await params).id;
    const playground = await get(id);

    if (!playground) {
        return {
            title: "Not Found"
        };
    }

    return {
        title: playground.name
    };
}

export default async function PlaygroundPage({ params }) {
    const id = (await params).id;
    const playground = await get(id);

    if (!playground) {
        return <p>Playground not found</p>;
    }

    return (
        <div className="w-full h-full flex flex-col">
            <PlaygroundEditorProvider playground={playground}>
                <div className="w-full h-14 px-4 flex items-center justify-between gap-4 shadow-[0_-0.0625rem_#27272A_inset]">
                    <div className="grid grid-cols-[auto_auto] items-center gap-4">
                        <Link href="/playgrounds">
                            <ChevronLeft size={20} />
                        </Link>
                        <h1 className="font-bold text-2xl truncate">{playground.name}</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <PlaygroundRun />
                        <PlaygroundLink className="hidden md:inline" />
                        <PlaygroundOption playground={playground} />
                    </div>
                </div>
                <div className="w-full h-[calc(100%-3.5rem)] md:grid md:grid-rows-1 md:grid-cols-[1fr_auto_1fr]">
                    <PlaygroundEditor />
                    <div className="w-[0.0625rem] h-full hidden bg-zinc-800 md:block" />
                    <PlaygroundPreview />
                </div>
            </PlaygroundEditorProvider>
        </div>
    );
}
