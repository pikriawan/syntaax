import SubmitButton from "./SubmitButton";
import { signIn } from "@/auth";

export default function GoogleSigninForm() {
    return (
        <form action={async () => {
            "use server";

            await signIn("google", { redirectTo: "/" });
        }}>
            <SubmitButton>Continue with Google</SubmitButton>
        </form>
    )
}
