import { links } from "@/data/sections"
import Link from "next/link"
import { anton } from "@/styles/fonts"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"


export default function SideNav({open, scrollbarWidth}: {open: boolean, scrollbarWidth: number }) {
    const container = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        const tl = gsap.timeline()
        if(open) {
            tl
                .set("body", { overflow: "hidden" })
                .set("#main", { paddingRight: `${scrollbarWidth}px` })
                .to("#responsiveNav", {
                    y: "100%",
                    duration: 1,
                    ease: "power4.out"
                })
        } else {
            tl
                .set("body", { overflow: "auto" })
                .set("#main", { paddingRight: 0 })
                .to("#responsiveNav", {
                    y: "-100%",
                    duration: 1,
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
                flex -top-full text-[clamp(2rem,6vw,3rem)]
                flex-col lg:hidden fixed w-dvw h-full z-100 bg-primary backdrop-blur-sm
                justify-center items-center leading-20 sm:leading-24 text-neutral-200
            `}
        >
            <Link href="">
                PROFILE
            </Link>
            {
               links.map(link => (
                    <Link 
                        href={link.link} 
                        key={link.name}
                    >
                        <span>{link.name.toUpperCase()}</span>
                    </Link>
               )) 
            }
        </nav>
    )
}