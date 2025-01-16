"use client";

import { useEffect, useActionState } from "react";
import Button from "./ui/button";
import Modal from "./ui/modal";
import SubmitButton from "./ui/submit-button";
import { deleteProject } from "@/actions/project";

export default function DeleteProjectForm({
    publicId,
    open,
    onClose = () => {},
}) {
    const[state, action] = useActionState(deleteProject, undefined);

    useEffect(() => {
        if (state?.success) {
            onClose();
        }
    }, [state]);

    return (
        <Modal open={open} onClose={onClose}>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Delete Project</h2>
                <p>Are you sure you want to delete this project?</p>
                <form action={action}>
                    <input type="hidden" name="public_id" value={publicId} />
                    <div className="flex gap-3">
                        <Button className="grow" type="button" color="secondary" onClick={onClose}>Cancel</Button>
                        <SubmitButton className="grow" color="danger">Yes</SubmitButton>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
