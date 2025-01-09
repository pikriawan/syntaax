import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import SubmitButton from "./SubmitButton";
import { signOut } from "@/auth";
import styles from "@/styles/SignoutForm.module.css";

export default function SignoutForm() {
    return (
        <form action={async () => {
            "use server";

            await signOut({ redirectTo: "/" });
        }}>
            <SubmitButton color="danger">
                <span className={styles["button-content"]}>
                    <ArrowRightStartOnRectangleIcon width={24} height={24} />
                    Sign out
                </span>
            </SubmitButton>
        </form>
    );
}
