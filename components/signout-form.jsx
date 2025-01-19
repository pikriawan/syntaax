import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import SubmitButton from "./ui/submit-button";
import { signOut } from "@/lib/auth";

export default function SignoutForm() {
    return (
        <form action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
        }}>
            <SubmitButton color="danger" className="flex justify-center items-center gap-2">
                <ArrowRightStartOnRectangleIcon className="w-6 h-6" />
                Sign out
            </SubmitButton>
        </form>
    );
}
