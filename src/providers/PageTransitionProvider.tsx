'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { usePathname } from "next/navigation"
import { createContext, useRef } from "react"

interface TransitionContextType {
    startTransition: () => void;
}

export const PageTransitionContext = createContext<TransitionContextType>({
    startTransition: () => {} 
})

export function PageTransitionProvider({children}: {children: React.ReactNode}) {
    const overlayRef = useRef<HTMLDivElement | null>(null)
    const pathname = usePathname()

    useGSAP((context) => {
        if (!overlayRef.current) return

        gsap.to(overlayRef.current, {
            yPercent: -100,
            delay: 0.5,
            ease: "expo.inOut",
            duration: 1,
        })
        return () => context.revert()
    }, {dependencies: [pathname]})

    function startTransition() {
        if (!overlayRef.current) return

        gsap.fromTo(overlayRef.current, 
            { yPercent: 100 },
            {
                yPercent: 0,
                ease: "expo.inOut",
                duration: 1,
            }
        )
    }

    return (
        <PageTransitionContext.Provider value={{ startTransition }}>
            <div
                ref={overlayRef}
                className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] bg-black"
            ></div>
            {children}
        </PageTransitionContext.Provider>
    )
}