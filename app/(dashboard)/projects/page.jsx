import ProjectList from "@/components/ProjectList";
import styles from "@/styles/ProjectsPage.module.css";

export default function ProjectsPage() {
    return (
        <div className={styles.project}>
            <h1>Projects</h1>
            <ProjectList />
        </div>
    );
}
