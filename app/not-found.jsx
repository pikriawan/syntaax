import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-4">
            <div className="flex gap-4 text-2xl font-bold">
                <h1>404</h1>
                <p>Not Found</p>
            </div>
            <Link className="bg-zinc-50 text-zinc-950 px-4 py-2 rounded-lg transition-colors hover:bg-zinc-400 disabled:bg-zinc-800 disabled:text-zinc-50 disabled:opacity-40 text-sm" href="/">
                Return home
            </Link>
        </div>
    );
}
