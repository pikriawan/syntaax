"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useState, useEffect, useActionState, useRef } from "react";
import Button from "./ui/button";
import Input from "./ui/input";
import Modal from "./ui/modal";
import SubmitButton from "./ui/submit-button";
import { createProject } from "@/actions/project";

export default function CreateProjectForm() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [state, action] = useActionState(createProject, undefined);
    const inputRef = useRef(null);

    useEffect(() => {
        if (open) {
            inputRef.current.focus();
        }
    }, [open]);

    return pathname === "/projects" && (
        <>
            <button onClick={() => setOpen(true)}>
                <PlusIcon className="w-6 h-6" />
            </button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">New Project</h2>
                    <form action={action} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <Input
                                autoComplete="off"
                                label="Name"id="name"
                                name="name"
                                defaultValue={state?.inputs?.name}
                                ref={inputRef}
                                required
                            />
                            {state?.errors?.name && (
                                <p className="text-red-500">
                                    {state.errors?.name[0]}
                                </p>
                            )}
                        </div>
                        <div className="flex gap-3">
                            <Button className="grow" type="button" color="secondary" onClick={() => setOpen(false)}>Cancel</Button>
                            <SubmitButton className="grow">Create</SubmitButton>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
}
