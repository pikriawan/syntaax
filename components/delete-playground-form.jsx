"use client";

import { usePathname, useRouter } from "next/navigation";
import Button from "./ui/button";
import Modal from "./ui/modal";
import SubmitButton from "./ui/submit-button";
import { del } from "@/actions/playground";

export default function DeletePlaygroundForm({ playground, open, onClose }) {
    const pathname = usePathname();
    const router = useRouter();

    async function onSubmit(event) {
        event.preventDefault();
        await del(new FormData(event.target));
        typeof onClose === "function" && onClose();

        if (pathname !== "/") {
            router.push("/playgrounds");
        }
    }

    return (
        <Modal open={open} onClose={onClose}>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Delete Playground</h2>
                <p>Are you sure you want to delete this playground?</p>
                <form onSubmit={onSubmit}>
                    <input type="hidden" name="id" value={playground.id} />
                    <div className="flex gap-3">
                        <Button className="grow" type="button" color="secondary" onClick={onClose}>Cancel</Button>
                        <SubmitButton className="grow" color="danger">Yes</SubmitButton>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
