"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import GoogleIcon from "./icons/google-icon";
import Button from "./ui/button";
import { cn } from "@/lib/utils";

export default function GoogleSigninButton({ className, disabled, ...props }) {
    const [pending, setPending] = useState(false);

    return (
        <Button
            onClick={async () => {
                setPending(true);
                await signIn("google", { redirectTo: "/playgrounds" });
            }}
            className={cn("flex justify-center items-center gap-2", className)}
            disabled={disabled || pending}
            {...props}
        >
            <GoogleIcon />
            Continue with Google
        </Button>
    );
}
