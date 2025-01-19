export default function Input({ id, label, ...props }) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id}>{label}</label>
            <input className="bg-zinc-950 text-zinc-50 rounded-lg p-2 shadow-[0_0_0_0.0625rem_#27272A_inset] focus:shadow-[0_0_0_0.0625rem_#FAFAFA_inset] focus:outline-none" id={id} {...props} />
        </div>
    );
}
