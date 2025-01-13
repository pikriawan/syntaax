import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import SubmitButton from "@/components/ui/submit-button";
import { signOut } from "@/lib/auth";

export default function ProfilePage() {
    return (
        <div className="p-4 h-[50rem]">
            <form action={async () => {
                "use server";

                await signOut({ redirectTo: "/" });
            }}>
                <SubmitButton color="danger" className="flex justify-center items-center gap-2">
                    <ArrowRightStartOnRectangleIcon width={16} height={16} />
                    Sign out
                </SubmitButton>
            </form>
        </div>
    );
}
