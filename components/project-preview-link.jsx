"use client";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useContext } from "react";
import ProjectEditorContext from "@/contexts/project-editor-context";

export default function ProjectPreviewLink({ className }) {
    const { project } = useContext(ProjectEditorContext);

    return (
        <Link href={`/project/${project.public_id}/files/index.html`} target="_blank" className={className}>
            <ArrowTopRightOnSquareIcon className="w-6 h-6" />
        </Link>
    );
}
