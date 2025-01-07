import SubmitButton from "./SubmitButton";
import { signOut } from "@/auth";

export default function SignoutForm() {
    return (
        <form action={async () => {
            "use server";

            await signOut({ redirectTo: "/signin" });
        }}>
            <SubmitButton color="danger">Sign out</SubmitButton>
        </form>
    )
}
