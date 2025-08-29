import { links } from "@/data/sections"
import Link from "next/link"
import { anton } from "@/styles/fonts"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useLayoutEffect, useRef } from "react"


export default function SideNav({open, scrollbarWidth}: {open: boolean, scrollbarWidth: number }) {
    const container = useRef<HTMLDivElement | null>(null)
    const navWords = useRef<Element[]>([])

    useLayoutEffect(() => {
        const navLinks = document.querySelectorAll(".sideNavLink > span.navlink-name")
        /*const matrix: Element[][] = []

        navLinks.forEach(link => {
            const word = link.querySelectorAll("div > span")
            matrix.push(Array.from(word))
        })*/

        navWords.current = Array.from(navLinks)
            
    }, [])

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
            
            navWords.current.forEach((word, i) => {
                tl.from(word.querySelectorAll("div > span"), {
                    left: "-100%",
                    stagger: 0.05
                }, i === 0 ? ">-0.7" : "<+0.1")
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
                h-0 text-[clamp(1rem,16vmin,7rem)] overflow-hidden
                lg:hidden fixed w-dvw z-100 bg-neutral
                justify-center items-center leading-[1.2] text-neutral-light
            `}
        >
            <div className={`
                absolute w-full h-dvh bg-radial-[at_15%_15%] from-[#878787]/40 from-10%
            `}>
                
            </div>
            <div className={`
                absolute flex flex-col h-dvh justify-center items-start py-header w-full px-6
                sm:px-16 md:px-28
            `}>
                <div id="sideNavLinks">
                    <Link href="" className="sideNavLink flex items-center gap-3">
                        <span className="text-[0.3em]">01</span>
                        <span className="navlink-name flex">
                            {Array.from("PROFILE").map((char, i) => (
                                <div key={i} className="relative overflow-hidden">
                                    <span className="whitespace-pre relative">
                                        {char}
                                    </span>
                                </div>
                            ))}
                        </span>
                    </Link>
                    {
                        links.map((link, i) => (
                            <Link
                                href={link.link}
                                key={link.name}
                                className="sideNavLink flex items-center gap-3"
                            >
                                <span className="text-[0.3em]">
                                    {`0${i + 2}`}
                                </span>
                                <span className="navlink-name flex">
                                    {Array.from(link.name.toUpperCase()).map((char, i) => (
                                        <div key={i} className="relative overflow-hidden">
                                            <span className="whitespace-pre relative">
                                                {char}
                                            </span>
                                        </div>
                                    ))}
                                </span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </nav>
    )
}