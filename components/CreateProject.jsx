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

export default function CreateProject() {
    const pathname = usePathname();
    const [modalShow, setModalShow] = useState(false);
    const [state, formAction] = useActionState(createProject, false);

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
                <form action={formAction} className={styles.form}>
                    <h2>New Project</h2>
                    <Input
                        autoComplete="off"
                        name="name"
                        label="Name"
                        id="project-name"
                        defaultValue={state?.success ? "" : state?.name}
                        required
                    />
                    <div className={styles["form-actions"]}>
                        <Button type="button" color="secondary" className={styles["form-action"]} onClick={() => setModalShow(false)}>Cancel</Button>
                        <SubmitButton className={styles["form-action"]}>Create</SubmitButton>
                    </div>
                </form>
            </Modal>
        </>
    );
}
