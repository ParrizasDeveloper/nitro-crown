'use client'

import { useScrollBar } from "@/providers/ScrollbarProvider"
import { anton, teko } from "@/styles/fonts"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function MainSection() {
    const swappingTitles: string[] = ['LIMITS', 'LUXURY', 'SPEED', 'PERFECTION']
    const [currentTitle, setCurrentTitle] = useState<number>(0)
    const dynamicTitle = useRef<HTMLDivElement | null>(null)
    const {changeScrollbarSize, scrollbarSize} = useScrollBar()

    useEffect(() => {
        const size = window.innerWidth - document.documentElement.clientWidth
        changeScrollbarSize(size)
    }, [])

    useGSAP(() => {
        if(!dynamicTitle.current) { return } 
        const tl = gsap.timeline()
        tl.to(dynamicTitle.current.querySelectorAll("span"), {
            duration: 0.1,
            display: "inline",
            stagger: 0.15,
            delay: 0.2
        })
        tl.to(dynamicTitle.current.querySelectorAll("span"), {
            duration: 0.1,
            display: "none",
            stagger: {
                from: "end",
                amount: 0.3
            },
            delay: 3,
            onComplete: () => {
                if(currentTitle + 1 >= swappingTitles.length) {
                    setCurrentTitle(0)
                    return
                }
                setCurrentTitle(currentTitle + 1)
            }
        })
    }, {dependencies: [currentTitle]})

    useGSAP(() => {
        gsap.to("#footer-main-section", {
            scrollTrigger: {
                trigger: '#footer-main-section',
                start: 'bottom bottom',
                end: 'bottom top',
                scrub: 0
            },
            ease: "none",
            clipPath: 'polygon(0 90%, 100% 70%, 100% 100%, 0 100%)',
        })

        gsap.to("#title-main-section-home", {
            scrollTrigger: {
                trigger: "#title-main-section-home",
                start: 0,
                end: "+=400",
                scrub: true
            },
            scale: "0.9",
        })
    }, [])

    return (
        <section className={`
            select-none relative z-10 h-dvh w-screen
        `}>
            <div id="main-section-container-home" className={`
                relative top-0 w-screen h-full
            `}>
                <div id="bg-main-section-home" className="relative w-full h-full" data-speed="0.7">
                    <div className={`
                        absolute w-full h-full z-20 
                        bg-gradient-to-b from-base/0 to-base
                    `}></div>
                    <Image
                        src='/images/home/bg_main.webp'
                        alt="background of the main section with image from the dealership"
                        fill
                        className="object-cover hidden xl:block object-bottom"
                        unoptimized
                    />
                    <Image
                        src='/images/home/bg_main_mobile.webp'
                        alt="background of the main section with image from the dealership"
                        fill
                        className="object-cover xl:hidden"
                        unoptimized
                    />
                </div>
                
                <div
                    id="title-main-section-home"
                    className={`
                        z-30 text-text
                        text-center text-[clamp(6rem,20vw,30rem)]
                        absolute top-1/2 left-0 -translate-y-1/2 leading-[0.8em]
                    `}
                    style={{width: `calc(100% - ${scrollbarSize}px)`}}
                    data-speed="0.5"
                >
                    <p className={`
                    relative top-[0.11em] [text-stroke:5px_black] 
                    text-text ${anton.className}
                    `}>BEYOND</p>
                    <div className="text-primary flex justify-center">
                        <div
                            ref={dynamicTitle}
                            className={`
                            ${teko.className} h-[1em] relative top-[0.2em]
                            text-shadow-[0_0_20px_#0079f9]
                        `}
                        >
                            {Array.from(swappingTitles[currentTitle]).map((letter, i) => (
                                <span key={i} className="hidden">{letter}</span>
                            ))}
                        </div>
                        <div className={`
                        bg-white w-[0.02em] [animation:blink_1.1s_ease-in-out_infinite]
                        ml-[0.02em] shadow-[0_0_10px_#014996] -scale-y-75 relative top-[0.025em]
                    `}></div>
                    </div>
                </div>
            </div>
            
            <div id="footer-main-section" className={`
                absolute top-0 w-full h-[calc(100%+1px)] [clip-path:polygon(0_100%,100%_100%,100%_100%,0_100%)]
                bg-primary-dark z-50
            `}></div>
        </section>
    )
}