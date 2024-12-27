import { SubmitButton } from "../Button";
import { signIn } from "@/auth";

export default function _GoogleSigninForm() {
    return (
        <form action={async () => {
            "use server";

            await signIn("google");
        }}>
            <SubmitButton>Sign in with Google</SubmitButton>
        </form>
    );
}
