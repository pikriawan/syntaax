"use client";

import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import DeletePlaygroundForm from "./delete-playground-form";
import EditPlaygroundForm from "./edit-playground-form";
import OptionButton from "./ui/option-button";
import OptionModal from "./ui/option-modal";

export default function PlaygroundOption({ playground, className }) {
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    return (
        <>
            <button className={className} onClick={() => setOpen(true)} title="Options">
                <EllipsisHorizontalIcon className="w-5 h-5" />
            </button>
            <OptionModal open={open} onClose={() => setOpen(false)} className="p-[0.0625rem] top-1/2 -translate-y-1/2">
                <div className="p-0 flex flex-col items-center">
                    <OptionButton onClick={() => {
                        setOpen(false);
                        setEditOpen(true);
                    }}>
                        Edit
                    </OptionButton>
                    <EditPlaygroundForm open={editOpen} onClose={() => setEditOpen(false)} playground={playground} />
                    <div className="w-full h-[0.0625rem] bg-zinc-800" />
                    <OptionButton className="text-red-500" onClick={() => {
                        setOpen(false);
                        setDeleteOpen(true);
                    }}>
                        Delete
                    </OptionButton>
                    <DeletePlaygroundForm open={deleteOpen} onClose={() => setDeleteOpen(false)} playground={playground} />
                    <div className="w-full h-[0.0625rem] bg-zinc-800" />
                    <OptionButton onClick={() => setOpen(false)}>Cancel</OptionButton>
                </div>
            </OptionModal>
        </>
    );
}
