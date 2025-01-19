import { XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils"

export default function Toast({
    children,
    open,
    onMouseOver,
    onMouseLeave,
    onClose = () => {}
}) {
    return (
        <div
            className={cn("w-[calc(100%-2rem)] fixed top-4 left-4 p-4 bg-zinc-950 shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-lg hidden md:w-80 md:top-[unset] md:left-[unset] md:bottom-4 md:right-4", open && "flex")}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
        >
            <div className="w-full text-sm">
                {children}
            </div>
            <button onClick={onClose}>
                <XMarkIcon width={16} height={16} />
            </button>
        </div>
    );
}
