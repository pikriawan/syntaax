import PlaygroundCard from "./playground-card";
import { list } from "@/data/playground";

export default async function PlaygroundList() {
    const playgrounds = await list();

    return playgrounds?.length ? playgrounds.map((playground) => (
        <PlaygroundCard key={playground.id} playground={playground} />
    )) : (
        <p>Nothing here. Start creating something amazing!</p>
    );
}
