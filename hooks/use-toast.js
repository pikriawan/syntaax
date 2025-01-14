"use client";

import { useContext } from "react";
import ToastContext from "@/contexts/toast-context";

export default function useToast() {
    const toast = useContext(ToastContext);
    return toast;
}
