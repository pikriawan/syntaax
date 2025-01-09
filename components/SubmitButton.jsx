"use client";

import { useFormStatus } from "react-dom";
import Button from "./Button";

export default function SubmitButton({ children, loading, ...props }) {
    const { pending } = useFormStatus();

    return (
        <Button loading={loading || pending} {...props}>
            {children}
        </Button>
    );
}
