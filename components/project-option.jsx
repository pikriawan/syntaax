"use client";

import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import DeleteProjectForm from "./delete-project-form";
import EditProjectForm from "./edit-project-form";
import OptionButton from "./ui/option-button";
import OptionModal from "./ui/option-modal";

export default function ProjectOption({ publicId, name }) {
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    return (
        <>
            <button className="absolute top-4 right-4" onClick={() => setOpen(true)}>
                <EllipsisHorizontalIcon className="w-6 h-6" />
            </button>
            <OptionModal open={open} onClose={() => setOpen(false)} className="p-[0.0625rem] top-1/2 -translate-y-1/2">
                <div className="p-0 flex flex-col items-center">
                    <OptionButton onClick={() => {
                        setOpen(false);
                        setEditOpen(true);
                    }}>
                        Edit
                    </OptionButton>
                    <EditProjectForm
                        open={editOpen}
                        onClose={() => setEditOpen(false)}
                        publicId={publicId}
                        name={name}
                    />
                    <div className="w-full h-[0.0625rem] bg-zinc-800" />
                    <OptionButton onClick={() => {
                        setOpen(false);
                        setDeleteOpen(true);
                    }}>
                        Delete
                    </OptionButton>
                    <DeleteProjectForm
                        open={deleteOpen}
                        onClose={() => setDeleteOpen(false)}
                        publicId={publicId}
                    />
                    <div className="w-full h-[0.0625rem] bg-zinc-800" />
                    <OptionButton onClick={() => setOpen(false)}>Cancel</OptionButton>
                </div>
            </OptionModal>
        </>
    );
}
