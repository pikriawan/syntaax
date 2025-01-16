"use client";

import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import DeleteProjectForm from "./delete-project-form";
import EditProjectForm from "./edit-project-form"; 
import Modal from "./ui/modal";

export default function ProjectOption({ publicId, name }) {
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    return (
        <>
            <button className="absolute top-4 right-4" onClick={() => setOpen(true)}>
                <EllipsisHorizontalIcon className="w-6 h-6" />
            </button>
            <Modal open={open} onClose={() => setOpen(false)} className="p-[0.0625rem] top-1/2 -translate-y-1/2">
                <div className="p-0 flex flex-col items-center">
                    <button className="w-full py-2 rounded-t-[0.4375rem] hover:bg-zinc-900" onClick={() => {
                        setOpen(false);
                        setEditOpen(true);
                    }}>
                        Edit
                    </button>
                    <EditProjectForm
                        open={editOpen}
                        onClose={() => setEditOpen(false)}
                        publicId={publicId}
                        name={name}
                    />
                    <div className="w-full h-[0.0625rem] bg-zinc-800" />
                    <button className="w-full py-2 text-red-500 hover:bg-zinc-900" onClick={() => {
                        setOpen(false);
                        setDeleteOpen(true);
                    }}>
                        Delete
                    </button>
                    <DeleteProjectForm
                        open={deleteOpen}
                        onClose={() => setDeleteOpen(false)}
                        publicId={publicId}
                    />
                    <div className="w-full h-[0.0625rem] bg-zinc-800" />
                    <button className="w-full py-2 hover:bg-zinc-900 rounded-b-[0.4375rem]" onClick={() => setOpen(false)}>Cancel</button>
                </div>
            </Modal>
        </>
    );
}
