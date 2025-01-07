import Image from "next/image";
import { auth } from "@/auth";
import SignoutForm from "@/components/SignoutForm";
import Stack from "@/components/Stack";
import styles from "@/styles/ProfilePage.module.css";

export default async function ProfilePage() {
    const session = await auth();

    return (
        <Stack className={styles["profile-page"]} direction="column" spacing={1}>
            <h1 className={styles["profile-title"]}>Profile</h1>
            <Image
                width={120}
                height={120}
                src={session?.user?.image}
                alt="Profile"
                className={styles["profile-image"]}
            />
            <h2>{session?.user?.name}</h2>
            <p>{session?.user?.email}</p>
            <SignoutForm />
        </Stack>
    )
}
