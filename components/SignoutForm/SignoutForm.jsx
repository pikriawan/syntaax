import { SubmitButton } from "../Button";
import { signOut } from "@/auth";

export default function SignoutForm() {
    return (
        <form action={async () => {
            "use server";

            await signOut();
        }}>
            <SubmitButton>Sign out</SubmitButton>
        </form>
    );
}
