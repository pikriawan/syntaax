"use client";

import Image from "next/image";
import { useState } from "react";
import SignoutButton from "./signout-button";
import Modal from "./ui/modal";

export default function Profile({ user }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(true)}>
                <Image
                    width={32}
                    height={32}
                    src={user?.image}
                    alt="Profile picture"
                    className="rounded-full"
                />
            </button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="flex flex-col items-center gap-4">
                    <Image width={128} height={128} src={user?.image} alt="Profile picture" className="rounded-full" />
                    <div className="flex flex-col gap-2 text-center">
                        <h2 className="text-2xl font-bold">{user?.name}</h2>
                        <p>{user?.email}</p>
                    </div>
                    <SignoutButton className="w-full" />
                </div>
            </Modal>
        </>
    );
}
