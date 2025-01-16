import Modal from "./modal";
import { cn } from "@/lib/utils";

export default function OptionModal({ children, className, ...props }) {
    return (
        <Modal className={cn("p-[0.0625rem] top-1/2 -translate-y-1/2", className)} {...props}>
            {children}
        </Modal>
    );
}
