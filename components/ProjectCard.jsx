import Link from "./Link";
import ProjectOption from "./ProjectOption";
import styles from "@/styles/ProjectCard.module.css";

function timeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    const intervals = [
        { label: "week", seconds: 604800 },
        { label: "day", seconds: 86400 },
        { label: "hour", seconds: 3600 },
        { label: "minute", seconds: 60 }
    ];

    for (const interval of intervals) {
        const count = Math.floor(seconds / interval.seconds);
        if (count >= 1) {
            return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
        }
    }

    const days = Math.floor(seconds / 86400);
    if (days > 30) {
        return "more than a month ago";
    }

    return "just now";
}

export default function ProjectCard({ id, name, updatedAt }) {
    return (
        <div className={styles["project-card"]}>
            <Link href={`/project/${name}`} className={styles["project-card-link"]}>
                <h2>{name}</h2>
                <p>{timeAgo(updatedAt)}</p>
            </Link>
            <ProjectOption id={id} name={name} className={styles["project-option-toggle"]} />
        </div>
    );
}
