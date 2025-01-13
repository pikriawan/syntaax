import { cn } from "@/lib/utils";

export default function Button({
    children,
    className,
    color,
    ...props
}) {
    return (
        <button
            className={cn(
                "text-sm bg-zinc-50 text-zinc-950 px-4 py-2 rounded-lg transition-colors hover:bg-zinc-400 disabled:bg-zinc-800 disabled:text-zinc-50 disabled:opacity-40",
                color === "primary" && "bg-zinc-50 text-zinc-950 hover:bg-zinc-400",
                color === "secondary" && "bg-zinc-950 text-zinc-50 shadow-[0_0_0_0.0625rem_#27272A_inset] hover:bg-zinc-900",
                color === "danger" && "bg-red-600 text-zinc-50 hover:bg-red-500",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
