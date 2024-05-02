export default function DivisionSectionComponent({ text }) {
    return (
        <p className="flex items-center gap-4 w-full my-4 font-medium text-zinc-400">
            <span className="w-full">
                <hr className="border-zinc-600"/>
            </span>
            {text}
            <span className="w-full">
                <hr className="border-zinc-600"/>
            </span>
        </p>
    )
}