import Image from "next/image";
import Link from "next/link";

export default function NavbarComponent() {
    return (
        <nav className="h-20 w-full p-4 flex justify-between items-center border-b-2 border-[#111]">
            <Link href={"/"}>
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={90}
                    height={18.5}
                    priority
                />
            </Link>
            <span className="flex ">
              <Link href="/SignIn"
                    className="w-20 hover:bg-purple-700 h-10 bg-[#8600f4] rounded-full flex justify-center items-center text-xs font-bold text-white">
                  Sign In
              </Link>
              <Link href="/"
                    className="w-20 h-10 hover:text-purple-700 text-[#8600f4] rounded-full flex justify-center items-center text-xs font-bold">
                  Sign Up
              </Link>
          </span>
        </nav>
    )
}