"use client";

import { useActionState } from "react";
import Button from "./ui/button";
import Input from "./ui/input";
import Modal from "./ui/modal";
import ModalClose from "./ui/modal-close";
import SubmitButton from "./ui/submit-button";
import { editProjectMetadata } from "@/actions/project";

export default function EditProjectForm({ publicId, name }) {
    const[state, action] = useActionState(editProjectMetadata, undefined);

    return (
        <Modal>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Edit Project</h2>
                <form action={action} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <input type="hidden" name="public_id" value={publicId} />
                        <Input
                            autoComplete="off"
                            label="Name"id="name"
                            name="name"
                            defaultValue={state?.inputs?.name || name}
                            required
                        />
                        {state?.errors?.name && (
                            <p className="text-red-500">
                                {state.errors?.name[0]}
                            </p>
                        )}
                    </div>
                    <div className="flex gap-3">
                        <ModalClose className="grow">
                            <Button className="w-full" type="button" color="secondary">Cancel</Button>
                        </ModalClose>
                        <SubmitButton className="grow">Save</SubmitButton>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
