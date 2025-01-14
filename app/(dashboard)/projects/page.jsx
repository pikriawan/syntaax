"use client";

import Button from "@/components/ui/button";
import useToast from "@/hooks/use-toast";

export default function ProjectListPage() {
    const toast = useToast();

    return (
        <div className="px-4 py-6 flex flex-col items-start gap-4">
            <h1 className="text-3xl font-bold">Projects</h1>
        </div>
    );
}
