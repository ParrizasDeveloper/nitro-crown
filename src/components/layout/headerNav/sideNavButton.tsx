import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import MorphSVGPlugin from "gsap/MorphSVGPlugin"
import { useRef } from "react"

gsap.registerPlugin(MorphSVGPlugin)

export function SideNavButton({open}: {open: boolean}) {
    const tl = useRef<gsap.core.Timeline | null>(null)

    useGSAP(() => {
        tl.current = gsap.timeline({ paused: true })
        tl.current
            .to('#topLine', { duration: 0.3, morphSVG: "#ctbr" })
            .to('#midLine', { duration: 0.3, opacity: 0, morphSVG: "#ctml" }, "<")
            .to('#botLine', { duration: 0.3, morphSVG: "#cttr" }, "<")  
    }, [])

    useGSAP(() => {
        if(open) {
            tl.current?.play()
        } else {
            tl.current?.reverse()
        }
    }, [open])

    return (
        <svg viewBox="0 0 500 500" className="h-full w-full">
            <path
                id="topLine"
                d="M50 100 L450 100"
                stroke="white"
                fill="none"
                strokeWidth={40}
                strokeLinecap="round"
            />
            <path
                id="midLine"
                d="M50 250 L450 250"
                stroke="white"
                fill="none"
                strokeWidth={40}
                strokeLinecap="round"
            />
            <path
                id="botLine"
                d="M50 400 L450 400"
                stroke="white"
                fill="none"
                strokeWidth={40}
                strokeLinecap="round"
            />


            <path
                id="ctbr"
                d="M100 100 L400 400"
                stroke="white"
                fill="none"
                strokeWidth={40}
                strokeLinecap="round"
                className="hidden"
            />
            <path
                id="ctml"
                d="M50 250 L50 250"
                stroke="white"
                fill="none"
                strokeWidth={40}
                strokeLinecap="round"
                className="hidden"
            />
            <path
                id="cttr"
                d="M100 400 L400 100"
                stroke="white"
                fill="none"
                strokeWidth={40}
                strokeLinecap="round"
                className="hidden"
            />
        </svg>
    )
}