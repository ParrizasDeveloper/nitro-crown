'use client'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";


gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

let smoother: ScrollSmoother | null = null;

export default function SmoothScrollProvider({children}: {children: React.ReactNode}) {
    const pathname = usePathname()

    useGSAP(() => {
        const mobile = window.matchMedia("(max-width: 768px)").matches

        if(mobile) {
            smoother?.kill();
            smoother = null
            ScrollTrigger.refresh()
            return
        }

        smoother?.kill();
        smoother = ScrollSmoother.create({
            smooth: 1.5,
            effects: true,
            normalizeScroll: true,
        })

        smoother.scrollTop(0)
        ScrollTrigger.refresh(true)
    }, {dependencies: [pathname]})
    
    return (
        <div id="smooth-wrapper" className="z-10 overflow-hidden">
            <div id="smooth-content">
                {children}
            </div>
        </div>
    )
}