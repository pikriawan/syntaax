"use client";

import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useActionState } from "react";
import Button from "./ui/button";
import Input from "./ui/input";
import Modal from "./ui/modal";
import ModalClose from "./ui/modal-close";
import ModalProvider from "./ui/modal-provider";
import ModalTrigger from "./ui/modal-trigger";
import SubmitButton from "./ui/submit-button";
import { updateProjectMetadata } from "@/actions/project";

export default function ProjectOption({ projectName }) {
    const[state, action] = useActionState(updateProjectMetadata, undefined);

    return (
        <ModalProvider>
            <ModalTrigger className="absolute top-4 right-4">
                <button onClick={(event) => event.preventDefault()}>
                    <EllipsisHorizontalIcon className="w-6 h-6" />
                </button>
            </ModalTrigger>
            <Modal>
                <div className="flex flex-col gap-4">
                    <form action={action} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <input type="hidden" name="old-name" value={projectName} />
                            <Input
                                autoComplete="off"
                                label="Name"id="name"
                                name="name"
                                defaultValue={state?.inputs?.name || projectName}
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
        </ModalProvider>
    );
}
