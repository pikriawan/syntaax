"use client";

import { useEffect, useRef, useActionState, useState } from "react";
import Button from "./ui/button";
import Input from "./ui/input";
import Modal from "./ui/modal";
import SubmitButton from "./ui/submit-button";
import { editMetadata } from "@/actions/project";

const initialState = {
    success: null,
    message: null,
    errors: null
};

export default function EditProjectForm({
    publicId,
    name: oldName,
    open,
    onClose = () => {},
}) {
    const [name, setName] = useState(oldName);
    const [state, action] = useActionState(editMetadata, initialState);
    const [errors, setErrors] = useState(state.errors);
    const inputRef = useRef(null);

    useEffect(() => {
        if (open) {
            inputRef.current.focus();
            inputRef.current.select();
        } else {
            setName(oldName);
            setErrors(null);
        }
    }, [open, oldName]);

    useEffect(() => {
        setErrors(state.errors);

        if (state.success) {
            onClose();
        }
    }, [state, onClose]);

    return (
        <Modal open={open} onClose={onClose}>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Edit Project</h2>
                <form action={action} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <input type="hidden" name="public_id" value={publicId} />
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
