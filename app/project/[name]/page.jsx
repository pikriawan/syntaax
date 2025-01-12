import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Appbar from "@/components/Appbar";
import Link from "@/components/Link.jsx";
import { getProject } from "@/project";
import styles from "@/styles/ProjectEditorPage.module.css";

export default async function ProjectEditorPage({ params }) {
    const { name } = await params;
    const project = await getProject(name);

    if (!project) {
        return <p>Not Found</p>;
    }

    return (
        <>
            <Appbar>
                <Link href="/projects" className={styles.link}>
                    <ChevronLeftIcon width={24} height={24} stroke="#F6F6F6" />
                </Link>
            </Appbar>
        </>
    );
}
