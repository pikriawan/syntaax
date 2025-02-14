import PlaygroundList from "@/components/playground-list";

export default function PlaygroundListPage() {
    return (
        <div className="px-4 py-6 flex flex-col items-start gap-4">
            <h1 className="text-3xl font-bold">Playgrounds</h1>
            <PlaygroundList />
        </div>
    );
}
