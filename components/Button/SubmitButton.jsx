"use client";

import { useFormStatus } from "react-dom";
import Button from "./Button";

export default function SubmitButton({ children, ...props }) {
    const { pending } = useFormStatus();

    return (
        <Button
            disabled={pending}
            loading={pending}
            {...props}
        >
            {children}
        </Button>
    );
}
