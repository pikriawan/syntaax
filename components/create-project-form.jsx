"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useState, useEffect, useActionState, useRef } from "react";
import Button from "./ui/button";
import Input from "./ui/input";
import Modal from "./ui/modal";
import SubmitButton from "./ui/submit-button";
import { create } from "@/actions/project";

const initialState = {
    success: null,
    message: null,
    errors: null
};

export default function CreateProjectForm() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [state, action] = useActionState(create, initialState);
    const [errors, setErrors] = useState(state.errors);
    const inputRef = useRef(null);

    useEffect(() => {
        if (open) {
            inputRef.current.focus();
        } else {
            setName("");
            setErrors(null);
        }
    }, [open]);

    useEffect(() => {
        setErrors(state.errors);
    }, [state]);

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
                                label="Name"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                ref={inputRef}
                                required
                            />
                            {errors?.name && (
                                <p className="text-red-500">
                                    {errors.name[0]}
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
