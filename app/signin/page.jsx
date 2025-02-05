import GoogleSigninButton from "@/components/google-signin-button";
import SyntaaxIcon from "@/components/icons/syntaax-icon";

export default function SigninPage() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-6">
            <SyntaaxIcon width={24} height={24} />
            <h1 className="text-2xl font-bold">Sign in to Syntaax</h1>
            <GoogleSigninButton />
        </div>
    );
}
