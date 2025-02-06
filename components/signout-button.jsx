"use client";

import { LogOut } from "lucide-react";
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
            <LogOut size={20} />
            Sign out
        </Button>
    );
}
