"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useState, useEffect, useActionState } from "react";
import BaseButton from "./BaseButton";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";
import SubmitButton from "./SubmitButton";
import { createProject } from "@/actions";
import styles from "@/styles/CreateProject.module.css";

const initialState = {
    success: null,
    message: "",
    inputs: null
};

export default function CreateProject() {
    const pathname = usePathname();
    const [modalShow, setModalShow] = useState(false);
    const [state, action, pending] = useActionState(createProject, initialState);

    useEffect(() => {
        if (state?.success) {
            setModalShow(false);
        }
    }, [state]);

    return pathname === "/projects" && (
        <>
            <BaseButton className={styles["icon-button"]} onClick={() => setModalShow(true)}>
                <PlusIcon width={24} height={24} />
            </BaseButton>
            <Modal show={modalShow} onHide={() => setModalShow(false)}>
                <form action={action} className={styles.form}>
                    <h2>New Project</h2>
                    <Input
                        autoComplete="off"
                        name="name"
                        label="Name"
                        id="project-name"
                        defaultValue={state?.inputs?.name}
                        autoFocus
                        required
                    />
                    {!pending && state?.message && <p className={styles["form-message"]}>{state.message}</p>}
                    <div className={styles["form-actions"]}>
                        <Button
                            type="button"
                            color="secondary"
                            className={styles["form-action"]}
                            onClick={() => setModalShow(false)}
                        >
                            Cancel
                        </Button>
                        <SubmitButton className={styles["form-action"]}>Create</SubmitButton>
                    </div>
                </form>
            </Modal>
        </>
    );
}
