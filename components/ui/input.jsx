import { cn } from "@/lib/utils";

export default function Input({ id, label, className, ...props }) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id}>{label}</label>
            <input className={cn("bg-zinc-950 text-zinc-50 rounded-lg p-2 shadow-[0_0_0_0.0625rem_#27272A_inset] disabled:bg-zinc-800 disabled:text-zinc-50 disabled:opacity-40 focus:shadow-[0_0_0_0.0625rem_#FAFAFA_inset] focus:outline-none placeholder:text-zinc-600", className)} id={id} {...props} />
        </div>
    );
}
