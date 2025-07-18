import { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(Flip)


export default function useNavLinksHover() {
    const actualHover = useRef<HTMLAnchorElement | null>(null)
    const hoverDiv = useRef<HTMLDivElement | null>(null)

    function animationHover(event: React.MouseEvent<HTMLAnchorElement>) {
        if (!hoverDiv.current) return
        if (!actualHover.current) {
            event.currentTarget.appendChild(hoverDiv.current)
            hoverDiv.current.style.opacity = '1'
        }
        if (actualHover.current) {
            const state = Flip.getState(hoverDiv.current)
            event.currentTarget.appendChild(hoverDiv.current)
            Flip.from(state, { opacity: 1, duration: 0.2 },)
        }
        actualHover.current = event.currentTarget
    }   

    function animationIn() {
        gsap.killTweensOf(hoverDiv.current)
    }

    function animationOut() {
        gsap.to(hoverDiv.current, { opacity: 0, duration: 0.3 })
        actualHover.current = null
    }

    return {actualHover, hoverDiv, animationHover, animationIn, animationOut}
}
