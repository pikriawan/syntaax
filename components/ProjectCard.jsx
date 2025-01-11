import Link from "./Link";
import ProjectOption from "./ProjectOption";
import styles from "@/styles/ProjectCard.module.css";

function timeAgo(date) {
    return "1m ago";
}

export default function ProjectCard({ id, name, updatedAt }) {
    return (
        <div className={styles["project-card"]}>
            <Link href={`/project/${name}`} className={styles["project-card-link"]}>
                <h2>{name}</h2>
                <p>{timeAgo(updatedAt)}</p>
            </Link>
            <ProjectOption id={id} className={styles["project-option-toggle"]} />
        </div>
    );
}
