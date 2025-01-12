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
    message: ""
};

export default function CreateProject() {
    const pathname = usePathname();
    const [modalShow, setModalShow] = useState(false);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [state, action, pending] = useActionState(createProject, initialState);

    useEffect(() => {
        setMessage(state?.message);

        if (state?.success) {
            setModalShow(false);
            setName("");
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
                    <div className={styles["form-field"]}>
                        <Input
                            autoComplete="off"
                            name="name"
                            label="Name"
                            id="project-name"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                                setMessage("");
                            }}
                            autoFocus
                            required
                        />
                        {!pending && message && <p className={styles["form-message"]}>{state?.message}</p>}
                    </div>
                    <div className={styles["form-actions"]}>
                        <Button
                            type="button"
                            color="secondary"
                            className={styles["form-action"]}
                            onClick={() => {
                                setModalShow(false);
                                setName("");
                                setMessage("");
                            }}
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
