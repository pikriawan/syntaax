import Image from "next/image";
import GoogleSigninForm from "@/components/GoogleSigninForm";
import syntaax from "@/public/syntaax.svg";
import styles from "@/styles/SigninPage.module.css";

export default function SigninPage() {
    return (
        <div className={styles.signin}>
            <div className={styles["signin-card"]}>
                <Image width={24} height={24} src={syntaax} alt="Syntaax" />
                <div className={styles["signin-header"]}>
                    <h2>Sign in to Syntaax</h2>
                    <p>Welcome! Please sign in to continue</p>
                </div>
                <div className={styles["signin-providers"]}>
                    <GoogleSigninForm />
                </div>
            </div>
        </div>
    );
}
