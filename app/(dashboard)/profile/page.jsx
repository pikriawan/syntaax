import Image from "next/image";
import SignoutForm from "@/components/signout-form";
import { getUser } from "@/data/user";

export default async function ProfilePage() {
    const user = await getUser();

    return (
        <div className="px-4 py-6 flex flex-col items-start gap-4">
            <h1 className="text-3xl font-bold">Profile</h1>
            <Image width={120} height={120} src={user?.image} alt="Profile picture" className="rounded-full" />
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">{user?.name}</h2>
                <p>{user?.email}</p>
            </div>
            <SignoutForm />
        </div>
    );
}
