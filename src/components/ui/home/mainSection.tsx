'use client'

import { anton } from "@/styles/fonts"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

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
            select-none
            relative z-10 h-dvh w-full
        `}>
            <div className={`
                relative overflow-hidden w-full h-[calc(100%+200px)]
            `}>
                <div className={`
                    absolute w-full h-full z-20 
                    bg-gradient-to-b from-base/0 to-base
                `}></div>
                <Image
                    src="/images/home/bg_main.webp"
                    alt="Background image about a dealership with sport cars"
                    fill
                    className="z-0 object-cover"
                    quality={100}
                    priority
                />
            </div>
            <div className={`
                z-30 text-text text-shadow-[5px_5px_20px_black]/30
                text-center text-[clamp(7rem,15vw,22rem)]
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-[1em]
            `}>
                <p>BEYOND</p>
                <div className="text-primary flex justify-center">
                    <div
                        ref={dynamicTitle}
                        className="h-[1em]"
                    >
                        {Array.from(swappingTitles[currentTitle]).map((letter, i) => (
                            <span key={i} className="hidden">{letter}</span>
                        ))}
                    </div>
                    <div className={`
                        bg-white w-[0.02em] [animation:blink_1.1s_ease-in-out_infinite]
                        ml-[0.02em]
                    `}></div>
                </div>
            </div>
        </section>
    )
}