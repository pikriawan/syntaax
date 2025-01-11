import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import BaseButton from "./BaseButton";
import Link from "./Link";
import styles from "@/styles/ProjectCard.module.css";

function ProjectOption({ id }) {
    return (
        <BaseButton style={{ display: "flex" }}>
            <EllipsisHorizontalIcon width={24} height={24} />
        </BaseButton>
    );
}

function timeAgo(date) {
    return "1m ago";
}

export default function ProjectCard({ id, name, updatedAt }) {
    return (
        <Link href="/" className={styles["project-card"]}>
            <div className={styles["project-card-header"]}>
                <h2>{name}</h2>
                <ProjectOption id={id} />
            </div>
            <p>{timeAgo(updatedAt)}</p>
        </Link>
    );
}
