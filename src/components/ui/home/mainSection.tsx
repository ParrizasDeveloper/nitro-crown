'use client'

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
    const timeOutTitle = useRef<NodeJS.Timeout | null>(null)
    const intervalTitle = useRef<NodeJS.Timeout | null>(null)

    useGSAP(() => {
        console.log("entrando")
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

    return (
        <section className={`
            ${anton.className}
            select-none overflow-hidden
            relative z-10 h-dvh w-full
        `}>
            <div className={`
                relative overflow-hidden w-full h-full
            `}>
                <div className={`
                    absolute w-full h-full z-20 
                    bg-gradient-to-b from-base/0 to-base
                `}></div>
                <Image
                    src="/images/home/bg_main.webp"
                    alt="Background image about a dealership with sport cars"
                    fill
                    className="z-0 object-cover hidden xl:block"
                    quality={100}
                    priority
                    
                />
                <Image
                    src="/images/home/bg_main_mobile.webp"
                    alt="Background image about a dealership with sport cars"
                    fill
                    className="z-0 object-cover xl:hidden"
                    quality={100}
                    priority
                />
            </div>
            <div className={`
                z-30 text-text
                text-center text-[clamp(6rem,20vw,30rem)]
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-[0.8em]
            `}>
                <p className="relative top-[0.11em] [text-stroke:5px_black]">BEYOND</p>
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
                        ml-[0.02em] shadow-[0_0_10px_#014996] -scale-y-75 relative top-[0.02em]
                    `}></div>
                </div>
            </div>
            <div className={`
                absolute h-[500px] origin-top-right -rotate-5 w-[110%] right-0
                bg-primary-dark bottom-0 z-50
            `}></div>
        </section>
    )
}