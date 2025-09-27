'use client'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

export default function SmoothScrollProvider({children}: {children: React.ReactNode}) {
    useGSAP(() => {
        const smoother = ScrollSmoother.create({
            smooth: 1.5,
            effects: true,
            normalizeScroll: true
        })
    })
    
    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                {children}
            </div>
        </div>
    )
}