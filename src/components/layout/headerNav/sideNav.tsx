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
                    height: "100%",
                    duration: 1,
                    ease: "power4.out"
                })
        } else {
            tl
                .set("body", { overflow: "auto" })
                .set("#main", { paddingRight: 0 })
                .to("#responsiveNav", {
                    height: 0,
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
                h-0 text-[clamp(4rem,11vmin,6rem)] overflow-hidden
                lg:hidden fixed w-dvw z-100 bg-neutral
                justify-center items-center leading-[1.2] text-neutral-light
            `}
        >
            <div className={`
                absolute w-full h-dvh bg-radial-[at_15%_15%] from-[#3a3a3a]
                to-60%
            `}>
                
            </div>
            <div className={`
                absolute flex flex-col h-dvh justify-center py-header w-full px-6
                sm:px-16 md:px-28
            `}>
                <Link href="" className="flex items-center gap-3">
                    <span className="text-[0.3em]">01</span>
                    <span>PROFILE</span>
                </Link>
                {
                    links.map((link, i) => (
                        <Link
                            href={link.link}
                            key={link.name}
                            className="flex items-center gap-3"
                        >
                            <span className="text-[0.3em]">
                                {`0${i + 2}`}
                            </span>
                            <span>{link.name.toUpperCase()}</span>
                        </Link>
                    ))
                }
            </div>
        </nav>
    )
}