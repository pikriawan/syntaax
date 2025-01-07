import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import Stack from "./Stack";
import SubmitButton from "./SubmitButton";
import { signOut } from "@/auth";

export default function SignoutForm() {
    return (
        <form action={async () => {
            "use server";

            await signOut({ redirectTo: "/" });
        }}>
            <SubmitButton color="danger">
                <Stack spacing={0.5} alignItems="center">
                    <ArrowRightStartOnRectangleIcon width={24} height={24} />
                    Sign out
                </Stack>
            </SubmitButton>
        </form>
    )
}
