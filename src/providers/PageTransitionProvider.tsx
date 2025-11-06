'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { createContext, useRef } from "react"

interface TransitionContextType {
    startTransitionTo: (newPath: string) => void;
}

export const PageTransitionContext = createContext<TransitionContextType>({
    startTransitionTo: () => {}
})

export function PageTransitionProvider({children}: {children: React.ReactNode}) {
    const overlayRef = useRef<HTMLDivElement | null>(null)
    const pathname = usePathname()
    const router = useRouter()
    const firstRender = useRef(true)

    useGSAP((context) => {
        if (!overlayRef.current) return

        gsap.to(overlayRef.current, {
            yPercent: -100,
            delay: firstRender.current ? 0.5 : 0,
            ease: "expo.inOut",
            duration: 1,
            onComplete: () => {
                firstRender.current = false
            }
        })

        return () => context.revert()
    }, {dependencies: [pathname]})

    function startTransitionTo(newPath: string) {
        if (!overlayRef.current) return

        gsap.fromTo(overlayRef.current, 
            { yPercent: 100 },
            {
                yPercent: 0,
                ease: "expo.inOut",
                duration: 1,
                onComplete: () => {
                    router.push(newPath)
                }
            }
        )
    }

    return (
        <PageTransitionContext.Provider value={{ startTransitionTo }}>
            <div
                ref={overlayRef}
                className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] bg-black"
            ></div>
            <div>
                
            </div>
            {children}
        </PageTransitionContext.Provider>
    )
}