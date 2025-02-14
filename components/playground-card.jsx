import Link from "next/link";
import PlaygroundOption from "./playground-option";
import { timeAgo } from "@/lib/utils";

export default function PlaygroundCard({ playground }) {
    return (
        <div className="bg-zinc-950 shadow-[0_0_0_0.0625rem_#27272A_inset] rounded-lg relative hover:bg-zinc-900">
            <Link href={`/playground/${playground.id}/edit`} className="p-4 grid grid-rows[auto_auto] gap-4">
                <h2 className="w-[calc(100%-2.25rem)] text-2xl font-bold truncate">{playground.name}</h2>
                <p className="text-sm">{timeAgo(playground.updated_at)}</p>
            </Link>
            <PlaygroundOption className="absolute top-4 right-4" playground={playground} />
        </div>
    );
}
