"use client";

import { editProjectMetadata } from "@/actions";
import { useState, useActionState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";
import SubmitButton from "./SubmitButton";
import styles from "@/styles/EditProject.module.css";

const initialState = {
    success: null,
    message: "",
};

export default function EditProject({ id, name, show, onHide }) {
    const [newName, setNewName] = useState(name);
    const [message, setMessage] = useState("");
    const [state, action, pending] = useActionState(editProjectMetadata, initialState);

    useEffect(() => {
        setMessage(state.message);

        if (state.success) {
            onHide();
        }
    }, [state]);

    return (
        <Modal show={show} onHide={() => {
            onHide();
            setNewName(name);
        }}>
            <form action={action} className={styles.form}>
                <h2>Edit Project</h2>
                <input type="hidden" name="id" value={id} />
                <div className={styles["form-field"]}>
                    <Input
                        autoComplete="off"
                        name="name"
                        label="Name"
                        id="project-name"
                        value={newName}
                        onChange={(event) => {
                            setNewName(event.target.value);
                            setMessage("");
                        }}
                        autoFocus
                        required
                    />
                    {!pending && message && <p className={styles["form-message"]}>{state.message}</p>}
                </div>
                <div className={styles["form-actions"]}>
                    <Button
                        type="button"
                        color="secondary"
                        className={styles["form-action"]}
                        onClick={() => {
                            onHide();
                            setNewName(name);
                            setMessage("");
                        }}
                    >
                        Cancel
                    </Button>
                    <SubmitButton className={styles["form-action"]}>Save</SubmitButton>
                </div>
            </form>
        </Modal>
    );
}
