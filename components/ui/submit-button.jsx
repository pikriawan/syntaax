"use client";

import { useFormStatus } from "react-dom";
import Button from "./button";

export default function SubmitButton({ children, disabled, ...props }) {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" disabled={disabled || pending} {...props}>
            {children}
        </Button>
    );
}
