"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./ui/button";
import Input from "./ui/input";
import Modal from "./ui/modal";
import SubmitButton from "./ui/submit-button";
import { editMetadata } from "@/actions/playground";

export default function EditProjectForm({ playground, open, onClose }) {
    const [name, setName] = useState(playground.name);
    const [pending, setPending] = useState(false);
    const [errors, setErrors] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (open) {
            inputRef.current.focus();
            inputRef.current.select();
        } else {
            setName(playground.name);
            setErrors(null);
        }
    }, [open, playground.name]);

    async function onSubmit(event) {
        event.preventDefault();
        setPending(true);
        setErrors(null);
        const response = await editMetadata(new FormData(event.target));
        setPending(false);

        if (response.success) {
            if (typeof onClose === "function") {
                onClose();
            }
        } else {
            setErrors(response.errors);
        }
    }

    return (
        <Modal
            open={open}
            onClose={() => {
                if (!pending && typeof onClose === "function") {
                    onClose();
                }
            }}
        >
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Edit Playground</h2>
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <input type="hidden" name="id" value={playground.id} />
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
                    <div className="grid grid-cols-2 gap-3">
                        <Button
                            type="button"
                            color="secondary"
                            disabled={pending}
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <SubmitButton>Save</SubmitButton>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
