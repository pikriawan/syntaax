"use client";

import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useState } from "react";
import BaseButton from "./BaseButton";
import DeleteProject from "./DeleteProject";
import EditProject from "./EditProject";
import Modal from "./Modal";
import styles from "@/styles/ProjectOption.module.css";

export default function ProjectOption({ id, name, className }) {
    const [modalShow, setModalShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);

    return (
        <>
            <BaseButton onClick={() => setModalShow(true)} className={className}>
                <EllipsisHorizontalIcon width={24} height={24} />
            </BaseButton>
            <Modal show={modalShow} onHide={() => setModalShow(false)} className={styles.modal}>
                <BaseButton
                    className={styles["option-button"]}
                    onClick={() => {
                        setModalShow(false);
                        setEditShow(true);
                    }}
                >
                    Edit
                </BaseButton>
                <BaseButton
                    className={clsx(
                        styles["option-button"],
                        styles["option-button-danger"]
                    )}
                    onClick={() => {
                        setModalShow(false);
                        setDeleteShow(true);
                    }}
                >
                    Delete
                </BaseButton>
                <BaseButton className={styles["option-button"]} onClick={() => setModalShow(false)}>Cancel</BaseButton>
            </Modal>
            <EditProject id={id} name={name} show={editShow} onHide={() => setEditShow(false)} />
            <DeleteProject id={id} show={deleteShow} onHide={() => setDeleteShow(false)} />
        </>
    );
}
