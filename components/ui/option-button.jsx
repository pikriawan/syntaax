import { cn } from "@/lib/utils";

export default function OptionButton({ children, className, ...props }) {
    return (
        <button className={cn("w-full py-2 first:rounded-t-[0.4375rem] last:rounded-b-[0.4375rem] hover:bg-zinc-900", className)} {...props}>
            {children}
        </button>
    );
}
