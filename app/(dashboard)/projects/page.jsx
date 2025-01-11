// Button style import
import "@/components/Button";

import ProjectList from "@/components/ProjectList";
import styles from "@/styles/ProjectsPage.module.css";

export default function ProjectsPage() {
    return (
        <div className={styles.project}>
            <ProjectList />
        </div>
    );
}
