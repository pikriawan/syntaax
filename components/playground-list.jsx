import PlaygroundCard from "./playground-card";
import { list } from "@/data/playground";

export default async function PlaygroundList() {
    const playgrounds = await list();

    return playgrounds?.length ? (
        <div className="flex flex-col w-full gap-4 md:grid md:grid-cols-3">
            {playgrounds.map((playground) => (
                <PlaygroundCard key={playground.id} playground={playground} />
            ))}
        </div>
    ) : (
        <p>Nothing here. Start create something amazing!</p>
    );
}
