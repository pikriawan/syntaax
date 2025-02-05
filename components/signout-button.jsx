"use client";

import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";
import { useState } from "react";
import Button from "./ui/button";
import { cn } from "@/lib/utils";

export default function SignoutButton({ className, disabled, ...props }) {
    const [pending, setPending] = useState(false);

    return (
        <Button
            onClick={async () => {
                setPending(true);
                await signOut({ redirectTo: "/" });
            }}
            className={cn("flex justify-center items-center gap-2", className)}
            color="danger"
            disabled={disabled || pending}
            {...props}
        >
            <ArrowRightStartOnRectangleIcon className="w-6 h-6" />
            Sign out
        </Button>
    );
}
