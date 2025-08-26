import { links } from "@/data/sections"
import Link from "next/link"
import { chillax } from "@/styles/fonts"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { cloneElement, useRef } from "react"
import { User } from "lucide-react"


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
                ${chillax.className}
                flex left-full gap text-[clamp(2rem,6vw,3rem)]
                flex-col lg:hidden fixed w-dvw h-full z-100 bg-neutral-950 backdrop-blur-sm
                justify-center items-center leading-20 sm:leading-24 text-neutral-200
                
            `}
        >
            <Link 
                href={""}
                className="p-2 rounded-2xl bg-neutral-400 text-neutral-950 mb-5"
            >
                <User className="w-[2em] h-[2em] stroke-2" />
            </Link>
            {
               links.map(link => (
                    <Link 
                        className={`flex items-center gap-5`} 
                        href={link.link} 
                        key={link.name}
                    >
                        {cloneElement(link.icon, { className: "w-[1em] h-[1em]" })}
                        <span>{link.name.toUpperCase()}</span>
                    </Link>
               )) 
            }
        </nav>
    )
}