"use client";

import { deleteProject } from "@/actions";
import { useActionState, useEffect } from "react";
import Button from "./Button";
import Modal from "./Modal";
import SubmitButton from "./SubmitButton";
import styles from "@/styles/DeleteProject.module.css";

const initialState = {
    success: null,
    message: "",
};

export default function DeleteProject({ id, show, onHide }) {
    const [state, action] = useActionState(deleteProject, initialState);

    useEffect(() => {
        if (state.success) {
            onHide();
        }
    }, [state]);

    return (
        <Modal show={show} onHide={onHide}>
            <form action={action} className={styles.form}>
                <h2>Delete Project</h2>
                <p>Are you sure you want to delete this project?</p>
                <input type="hidden" name="id" value={id} />
                <div className={styles["form-actions"]}>
                    <Button
                        type="button"
                        color="secondary"
                        className={styles["form-action"]}
                        onClick={onHide}
                    >
                        Cancel
                    </Button>
                    <SubmitButton color="danger" className={styles["form-action"]}>Yes</SubmitButton>
                </div>
            </form>
        </Modal>
    );
}
