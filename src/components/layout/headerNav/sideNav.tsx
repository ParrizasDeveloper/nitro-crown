import { links } from "@/data/sections"
import Link from "next/link"
import { anton } from "@/styles/fonts"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useLayoutEffect, useRef } from "react"
import NavFooter from "../footer/navFooter"


export default function SideNav({open, scrollbarWidth}: {open: boolean, scrollbarWidth: number }) {
    const container = useRef<HTMLDivElement | null>(null)
    const navWords = useRef<Element[]>([])

    useLayoutEffect(() => {
        const navLinks = document.querySelectorAll("a.sideNavLink")
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
                    ease: "power1.out"
                })
            
            navWords.current.forEach((word, i) => {
                tl.from(word.querySelectorAll("span.navlink-name > div > span"), {
                    left: "-100%",
                    stagger: 0.05,
                    duration: 0.5,
                    ease: "power3.out"
                }, i === 0 ? ">-0.7" : "<+0.1")
                tl.from(word.querySelector("span.index"), {
                    opacity: 0,
                    duration: 1,
                    xPercent: -50,
                }, "<")
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
        <div 
            id="responsiveNav"
            ref={container}
            className={`
                ${anton.className}
                h-0 overflow-hidden
                lg:hidden fixed w-dvw z-100 bg-neutral
                justify-center items-center leading-[1.2] text-neutral-light
            `}
        >
            <div className={`
                absolute w-full h-dvh bg-radial-[at_15%_15%] from-[#878787]/40 from-10%
            `}></div>
            <div className="flex flex-col h-dvh pt-header">
                <div className={`
                    flex w-full flex-2 items-center text-[clamp(4rem,14vmin,7rem)] px-[10vmin]
                    shrink-[4]
                `}>
                    <nav id="sideNavLinks">
                        <Link href="" className="sideNavLink flex items-center gap-3">
                            <span className="index text-[0.3em]">01</span>
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
                                    <span className="index text-[0.3em]">
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
                    </nav>
                </div>
                <NavFooter />
            </div>
            
        </div>
    )
}