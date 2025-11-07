import { links } from "@/data/sections"
import Link from "next/link"
import { anton } from "@/styles/fonts"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useLayoutEffect, useRef } from "react"
import NavFooter from "./navFooter"
import { useScrollBar } from "@/context/ScrollbarProvider"
import { usePageTransition } from "@/providers/PageTransitionProvider"

//------------------------------------------------------------------------------
//ARREGLAR TOGGLE DE NAVEGACIÓN AL CLICAR RÁPIDAMENTE VARIAS VECES CONSECUTIVAS!!
//------------------------------------------------------------------------------

export default function SideNav({open, closeNav}: {open: boolean, closeNav: () => void}) {
    const { startTransitionTo } = usePageTransition()
    const container = useRef<HTMLDivElement | null>(null)
    const navWords = useRef<Element[]>([])
    const {scrollbarSize: scrollbarWidth} = useScrollBar()

    useLayoutEffect(() => {
        const navLinks = document.querySelectorAll("a.sideNavLink")
        navWords.current = Array.from(navLinks)
            
    }, [])

    useGSAP(() => {
        const tl = gsap.timeline()
        if(open) {
            tl
                .set("body", { overflow: "hidden" })
                .set("#main", { marginRight: `${scrollbarWidth}px` })
                .to("#responsiveNav", {
                    height: "100%",
                    duration: 1,
                    ease: "power1.out"
                })
            
            navWords.current.forEach((word, i) => {
                tl.from(word.querySelectorAll("span.navlink-name div.letter-nav > span"), {
                    left: "-100%",
                    duration: 1,
                    stagger: 0.03,
                    ease: "power3.out"
                }, i === 0 ? ">-0.7" : "<+0.1")
                tl.from(word.querySelector("span.index"), {
                    opacity: 0,
                    duration: 1,
                    xPercent: -50,
                }, "<")
            })
            tl
                .from("#navFooter>div", {
                    width: 0,
                    opacity: 0,
                    ease: "power2.out"
                }, ">-0.8")
                .from("#navFooter>div>div", {
                    yPercent: 100,
                    opacity: 0,
                    ease: "power2.out"
                }, ">-0.1")
        } else {
            tl
                .set("body", { overflow: "auto" })
                .set("#main", { marginRight: 0 })
                .to("#responsiveNav", {
                    height: 0,
                    duration: 1,
                    ease: "power2.out"
                })
        } 
    }, [open])

    function handleHoverLink(event: React.MouseEvent<HTMLAnchorElement>) {
        gsap.to(event.currentTarget.querySelectorAll(".letter-nav"), {
            yPercent: -100,
            stagger: 0.02
        })
        gsap.to(event.currentTarget.querySelector(".index"), {
            color: "#0079f9",
            duration: 0.5,
        })
        gsap.to("#sideNavLinks > .sideNavLink:not(:hover)", {
            opacity: 0.3
        })
    }

    function handleLeaveLink(event: React.MouseEvent<HTMLAnchorElement>) {
        gsap.to(event.currentTarget.querySelectorAll(".letter-nav"), {
            yPercent: 0,
            stagger: 0.02
        })
        gsap.to(event.currentTarget.querySelector(".index"), {
            color: "#FAFAFA",
            duration: 0.5,
        })
        gsap.to("#sideNavLinks > .sideNavLink", {
            opacity: 1
        })
    }

    function handleClickLink(event: React.MouseEvent<HTMLAnchorElement>, link: string) {
        event.preventDefault()
        startTransitionTo(link, closeNav)
    }

    return (
        <div 
            id="responsiveNav"
            ref={container}
            className={`
                ${anton.className}
                h-0 overflow-hidden
                fixed w-dvw z-100 bg-neutral
                justify-center items-center leading-[1.2] text-neutral-light
                text-text
            `}
        >
            <div className={`
                absolute w-full h-dvh bg-gradient-to-br from-base to-primary-dark
            `}></div>
            <div className="relative flex flex-col h-dvh pt-header">
                <div className={`
                    flex w-full flex-2 items-center text-[clamp(4rem,14vmin,7rem)] px-[10%]
                    shrink-[4]
                `}>
                    <nav id="sideNavLinks">
                        {/*<Link 
                            href="" 
                            className="sideNavLink grid grid-cols-[0.7ch_auto] items-center gap-3 py-2.5"
                            onMouseEnter={handleHoverLink}
                            onMouseLeave={handleLeaveLink}
                        >
                            <span 
                                className="index text-[0.3em] text-neutral-light"
                            >01</span>
                            <span className="navlink-name flex">
                                {Array.from("PROFILE").map((char, i) => (
                                    <div key={i} className="relative overflow-hidden">
                                        <div className="relative letter-nav leading-[1em]">
                                            <span className="whitespace-pre relative">
                                                {char}
                                            </span>
                                            <div className="absolute text-primary">
                                                {char}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </span>
                        </Link>*/}
                        {
                            links.map((link, i) => (
                                <Link
                                    href={link.link}
                                    key={link.name}
                                    className="sideNavLink grid grid-cols-[0.7ch_auto] items-center gap-3  py-2.5"
                                    onMouseEnter={handleHoverLink}
                                    onMouseLeave={handleLeaveLink}
                                    onClick={(e) => handleClickLink(e, link.link)}
                                >
                                    <span className="index text-[0.3em]">
                                        {`0${i + 1}`}
                                    </span>
                                    <span className="navlink-name flex">
                                        {Array.from(link.name.toUpperCase()).map((char, i) => (
                                            <div key={i} className="relative overflow-hidden">
                                                <div className="relative letter-nav leading-[1em]">
                                                    <span className="whitespace-pre relative">
                                                        {char}
                                                    </span>
                                                    <div className="absolute text-primary">
                                                        {char}
                                                    </div>
                                                </div>
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