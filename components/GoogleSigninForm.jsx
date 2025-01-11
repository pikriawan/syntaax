import Image from "next/image";
import SubmitButton from "./SubmitButton";
import { signIn } from "@/auth";
import google from "@/public/google.svg";
import styles from "@/styles/GoogleSigninForm.module.css";

export default function GoogleSigninForm() {
    return (
        <form action={async () => {
            "use server";

            await signIn("google", { redirectTo: "/" });
        }}>
            <SubmitButton className={styles["google-signin-button"]}>
                <Image src={google} alt="Google" />
                Continue with Google
            </SubmitButton>
        </form>
    )
}
