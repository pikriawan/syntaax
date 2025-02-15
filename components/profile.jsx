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
                    width={24}
                    height={24}
                    src={user?.image}
                    alt="Profile picture"
                    className="rounded-full"
                />
            </button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="flex flex-col items-center gap-4">
                    <Image
                        width={80}
                        height={80}
                        src={user?.image}
                        alt="Profile picture"
                        className="rounded-full"
                    />
                    <div className="flex flex-col text-center">
                        <h2 className="text-xl font-bold">{user?.name}</h2>
                        <p className="text-sm">{user?.email}</p>
                    </div>
                    <SignoutButton className="w-full" />
                </div>
            </Modal>
        </>
    );
}
