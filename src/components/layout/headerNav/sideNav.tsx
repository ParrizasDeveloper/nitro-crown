import { links } from "@/data/sections"
import Link from "next/link"
import { anton } from "@/styles/fonts"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"


export default function SideNav({open, scrollbarWidth}: {open: boolean, scrollbarWidth: number }) {
//    const tl = useRef<gsap.core.Timeline | null>(null)
    const container = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        const tl = gsap.timeline()
        if(open) {
            tl
                .set("body", { overflow: "hidden" })
                .set("#main", { paddingRight: `${scrollbarWidth}px` })
                .to("#responsiveNav", {
                    x: "-100%",
                    ease: "power4.out"
                })
        } else {
            tl
                .set("body", { overflow: "auto" })
                .set("#main", { paddingRight: 0 })
                .to("#responsiveNav", {
                    x: "100%",
                    ease: "power2.out"
                })

        }
    }, [open])

    return (
        <nav 
            id="responsiveNav"
            ref={container}
            className={`
                ${anton.className}
                flex left-full
                flex-col lg:hidden fixed w-dvw h-full z-100 bg-neutral-950 backdrop-blur-sm
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