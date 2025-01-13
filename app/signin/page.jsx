import GoogleIcon from "@/components/icons/google-icon";
import SyntaaxIcon from "@/components/icons/syntaax-icon";
import SubmitButton from "@/components/ui/submit-button";
import { signIn } from "@/lib/auth";

export default function SignInPage() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="p-8 flex flex-col justify-center items-center gap-4 shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-lg">
                <SyntaaxIcon width={24} height={24} />
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-bold">Sign in to Syntaax</h1>
                    <p>Welcome! Please sign in to continue</p>
                </div>
                <form
                    action={async () => {
                        "use server";

                        await signIn("google", { redirectTo: "/projects" });
                    }}
                    className="w-full"
                >
                    <SubmitButton className="w-full flex justify-center items-center gap-2">
                        <GoogleIcon />
                        Continue with Google
                    </SubmitButton>
                </form>
            </div>
        </div>
    );
}
