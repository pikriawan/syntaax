import GoogleSigninForm from "@/components/GoogleSigninForm";
import styles from "@/styles/SigninPage.module.css";

export default function SigninPage() {
    return (
        <div className={styles.signin}>
            <GoogleSigninForm />
        </div>
    );
}
