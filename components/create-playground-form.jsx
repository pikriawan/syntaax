"use client";

import { Plus } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Button from "./ui/button";
import Input from "./ui/input";
import Modal from "./ui/modal";
import SubmitButton from "./ui/submit-button";
import { create } from "@/actions/playground";

export default function CreatePlaygroundForm() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [pending, setPending] = useState(false);
    const [errors, setErrors] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (open) {
            inputRef.current.focus();
        } else {
            setName("");
            setErrors(null);
        }
    }, [open]);

    async function onSubmit(event) {
        event.preventDefault();
        setPending(true);
        setErrors(null);
        const response = await create(new FormData(event.target));
        setPending(false);

        if (response.success) {
            setOpen(false);
        } else {
            setErrors(response.errors);
        }
    }

    return (
        <>
            <button onClick={() => setOpen(true)} title="Create playground">
                <Plus size={20} />
            </button>
            <Modal
                open={open}
                onClose={() => {
                    if (!pending) {
                        setOpen(false);
                    }
                }}
            >
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">New Playground</h2>
                    <form onSubmit={onSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <Input
                                autoComplete="off"
                                label="Name"
                                id="name"
                                name="name"
                                placeholder="My Playground"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                disabled={pending}
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
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </Button>
                            <SubmitButton>Create</SubmitButton>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
}
