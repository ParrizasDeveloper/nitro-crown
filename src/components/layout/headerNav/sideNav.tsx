import { links } from "@/data/sections"
import Link from "next/link"
import { anton } from "@/styles/fonts"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function SideNav({open}: {open: boolean}) {

    useGSAP(() => {
        if(open) {
            
        }
    }, {dependencies: [open]})

    return (
        <nav 
            id="responsiveNav"
            className={`
                ${anton.className} 
                ${open ? "flex" : "hidden"}
                flex-col lg:hidden fixed w-full h-dvh z-100 bg-neutral-950/99 backdrop-blur-sm
                justify-center items-center leading-20 sm:leading-24 text-neutral-200
            `}
        >
            <Link 
                href={""} 
                className={`text-[clamp(2rem,6vw,3rem)]`}
            >Profile</Link>
            {
               links.map(link => (
                    <Link 
                        className={`text-[clamp(2rem,6vw,3rem)]`} 
                        href={link.link} 
                        key={link.name}
                    >
                        {link.name}
                    </Link>
               )) 
            }
        </nav>
    )
}