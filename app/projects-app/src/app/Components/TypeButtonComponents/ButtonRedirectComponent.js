import Link from "next/link";

export default function ButtonRedirectComponent({ text, link, color, textColor, hoverColor, hoverTextColor, icon}) {
    return (
        <Link href={link}
              className={`h-12 bg-white rounded-xl text-black font-bold flex justify-center items-center gap-2`}>
            {icon && icon}
            {text && text}
        </Link>
    )
}