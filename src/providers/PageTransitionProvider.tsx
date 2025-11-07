'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { createContext, useContext, useRef } from "react"

interface TransitionContextType {
    startTransitionTo: (newPath: string, onComplete?: () => void) => void;
    firstRender: boolean;
}

export const PageTransitionContext = createContext<TransitionContextType | null>(null)

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

    function startTransitionTo(newPath: string, onComplete?: () => void) {
        if (!overlayRef.current) return

        fetch(newPath, { cache: "force-cache"})

        gsap.fromTo(overlayRef.current, 
            { yPercent: 100 },
            {
                yPercent: 0,
                ease: "expo.inOut",
                duration: 1,
                onComplete: () => {
                    if (onComplete) onComplete()
                    if (newPath === pathname) {
                        ScrollSmoother.get()?.scrollTo(0)
                        router.refresh()

                        gsap.to(overlayRef.current, {
                            yPercent: -100,
                            delay: 0,
                            ease: "expo.inOut",
                            duration: 1,
                        })
                    } else {
                        router.push(newPath)
                    }
                }
            }
        )
    }

    return (
        <PageTransitionContext.Provider value={{ startTransitionTo, firstRender: firstRender.current }}>
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

export function usePageTransition() {
    const context =  useContext(PageTransitionContext)
    if (!context) {
        throw new Error("usePageTransition must be used within a PageTransitionProvider")
    }
    return context
}