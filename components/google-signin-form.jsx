import GoogleIcon from "./icons/google-icon";
import SubmitButton from "./ui/submit-button";
import { signIn } from "@/lib/auth";

export default function GoogleSigninForm() {
    return (
        <form action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/playgrounds" });
        }} className="w-full">
            <SubmitButton className="w-full flex justify-center items-center gap-2">
                <GoogleIcon />
                Continue with Google
            </SubmitButton>
        </form>
    );
}
