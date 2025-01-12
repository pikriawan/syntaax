import Tab from "@/components/Tab";
import TabPanel from "@/components/TabPanel";
import Tabs from "@/components/Tabs";
import { getProject } from "@/project";

export default async function ProjectEditorPage({ params }) {
    const { name } = await params;
    const project = await getProject(name);
    console.log(project);

    if (!project) {
        return <p>Not Found</p>;
    }

    return (
        <>
            <h2>{project.name}</h2>
        </>
    );
}
