import { links } from "@/data/sections"
import { UserIcon } from "lucide-react"
import Link from "next/link"

export default function SideNav({open}: {open: boolean}) {
    return (
        <nav className={`
            flex flex-col lg:hidden fixed w-full h-dvh z-100 bg-neutral-950/99 backdrop-blur-sm
            justify-center items-center
        `}>
            <Link href={""}>Profile</Link>
            {
               links.map(link => (
                <Link href={link.link} key={link.name}>{link.name}</Link>
               )) 
            }
        </nav>
    )
}