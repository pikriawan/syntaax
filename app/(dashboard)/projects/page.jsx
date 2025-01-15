import ProjectList from "@/components/project-list";

export default function ProjectListPage() {
    return (
        <div className="px-4 py-6 flex flex-col items-start gap-4">
            <h1 className="text-3xl font-bold">Projects</h1>
            <div className="flex flex-col w-full gap-4 md:grid md:grid-cols-2 md:grid-rows-2">
                <ProjectList />
            </div>
        </div>
    );
}
