"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useActionState, useEffect } from "react";
import Button from "./ui/button";
import Input from "./ui/input";
import Modal from "./ui/modal";
import ModalClose from "./ui/modal-close";
import ModalProvider from "./ui/modal-provider";
import ModalTrigger from "./ui/modal-trigger";
import SubmitButton from "./ui/submit-button";
import { createProject } from "@/actions/project";

export default function CreateProjectForm() {
    const pathname = usePathname();
    const [state, action, pending] = useActionState(createProject, undefined);

    useEffect(() => {
        console.log(state);
    }, [state]);

    return pathname === "/projects" && (
        <ModalProvider>
            <ModalTrigger className="flex">
                <button>
                    <PlusIcon className="w-6 h-6" />
                </button>
            </ModalTrigger>
            <Modal>
                <div className="flex flex-col gap-4">
                    <form action={action} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <Input
                                autoComplete="off"
                                label="Name"id="name"
                                name="name"
                                defaultValue={state?.inputs?.name}
                            />
                            {state?.errors?.name && (
                                <div className="text-red-500">
                                    <p>Name must:</p>
                                    <ul>
                                        {state.errors.name.map((error) => (
                                            <li key={error}>- {error}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="flex gap-3">
                            <ModalClose className="grow">
                                <Button className="w-full" type="button" color="secondary">Cancel</Button>
                            </ModalClose>
                            <SubmitButton className="grow">Create</SubmitButton>
                        </div>
                    </form>
                </div>
            </Modal>
        </ModalProvider>
    );
}
