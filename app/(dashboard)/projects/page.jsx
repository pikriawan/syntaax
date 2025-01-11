import ProjectList from "@/components/ProjectList";
import styles from "@/styles/ProjectPage.module.css";

export default function ProjectPage() {
    return (
        <div className={styles.project}>
            <ProjectList />
        </div>
    )
}
