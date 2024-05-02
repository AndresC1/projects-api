export default function InputFormComponent({ label, type, placeholder, value, onChange }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-zinc-400 font-medium">{label}</label>
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} className="h-12 p-4 bg-white rounded-xl text-zinc-900"/>
        </div>
    )
}