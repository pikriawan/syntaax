"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./ui/button";
import Modal from "./ui/modal";
import SubmitButton from "./ui/submit-button";
import { del } from "@/actions/playground";

export default function DeletePlaygroundForm({ playground, open, onClose }) {
    const pathname = usePathname();
    const router = useRouter();
    const [pending, setPending] = useState(false);

    async function onSubmit(event) {
        event.preventDefault();
        setPending(true);
        await del(new FormData(event.target));
        setPending(false);

        if (typeof onClose === "function") {
            onClose();
        }

        if (pathname !== "/") {
            router.push("/playgrounds");
        }
    }

    return (
        <Modal
            open={open}
            onClose={() => {
                if (!pending && typeof onClose === "function") {
                    onClose();
                }
            }}
        >
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Delete Playground</h2>
                <p>Are you sure you want to delete this playground?</p>
                <form onSubmit={onSubmit}>
                    <input type="hidden" name="id" value={playground.id} />
                    <div className="grid grid-cols-2 gap-3">
                        <Button
                            type="button"
                            color="secondary"
                            disabled={pending}
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <SubmitButton className="grow" color="danger">Yes</SubmitButton>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
