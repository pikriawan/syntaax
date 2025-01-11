import ProjectCard from "./ProjectCard";
import { listProjects } from "@/project";
import styles from "@/styles/ProjectList.module.css";

export default async function ProjectList() {
    const projects = await listProjects();

    return (
        <div className={styles["project-list"]}>
            {projects.length ? projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    updatedAt={project.updated_at}
                />
            )) : (
                <p>You don't have any projects yet</p>
            )}
        </div>
    );
}
