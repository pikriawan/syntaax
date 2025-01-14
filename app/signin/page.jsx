import GoogleSigninForm from "@/components/google-signin-form";
import SyntaaxIcon from "@/components/icons/syntaax-icon";

export default function SignInPage() {
    return (
        <div className="w-full h-full p-4 flex justify-center items-center">
            <div className="p-8 flex flex-col justify-center items-center gap-4 shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-lg">
                <SyntaaxIcon width={24} height={24} />
                <div className="flex flex-col justify-center items-center text-center gap-2">
                    <h1 className="text-2xl font-bold">Sign in to Syntaax</h1>
                    <p>Welcome! Please sign in to continue</p>
                </div>
                <GoogleSigninForm />
            </div>
        </div>
    );
}
