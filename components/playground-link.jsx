"use client";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useContext } from "react";
import PlaygroundEditorContext from "@/contexts/playground-editor-context";

export default function PlaygroundLink({ className }) {
    const { playground } = useContext(PlaygroundEditorContext);

    return (
        <Link href={`/playground/${playground.id}/files/index.html`} target="_blank" className={className} title="Preview">
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
        </Link>
    );
}
