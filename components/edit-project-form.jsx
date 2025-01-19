"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./ui/button";
import Input from "./ui/input";
import Modal from "./ui/modal";
import SubmitButton from "./ui/submit-button";
import { editMetadata } from "@/actions/project";

export default function EditProjectForm({ project, open, onClose }) {
    const [name, setName] = useState(project.name);
    const [errors, setErrors] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (open) {
            inputRef.current.focus();
            inputRef.current.select();
        } else {
            setName(project.name);
            setErrors(null);
        }
    }, [open, project]);

    async function onSubmit(event) {
        event.preventDefault();
        setErrors(null);
        const response = await editMetadata(new FormData(event.target));

        if (response.success) {
            typeof onClose === "function" && onClose();
        } else {
            setErrors(response.errors);
        }
    }

    return (
        <Modal open={open} onClose={onClose}>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Edit Project</h2>
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <input type="hidden" name="public_id" value={project.public_id} />
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
                        <Button className="grow" type="button" color="secondary" onClick={onClose}>Cancel</Button>
                        <SubmitButton className="grow">Save</SubmitButton>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
