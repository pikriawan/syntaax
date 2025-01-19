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

export function timeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now - new Date(date)) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 30) {
        return "more than 30d ago";
    } else if (days >= 1) {
        return `${days}d ago`;
    } else if (hours >= 1) {
        return `${hours}h ago`;
    } else if (minutes >= 1) {
        return `${minutes}m ago`;
    } else {
        return "just now";
    }
}
