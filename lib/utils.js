import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function parseFormData(formData) {
    const rawData = {};

    for (const [key, value] of formData.entries()) {
        rawData[key] = value;
    }

    return rawData;
}
